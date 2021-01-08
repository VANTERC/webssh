<template>
  <div>
    <a-drawer
      title="文件管理"
      placement="right"
      width="900"
      :closable="true"
      :visible="visible"
      @close="onClose"
    >
    <div class="headerRow">
      <div>
        <a-breadcrumb>
          <a-breadcrumb-item href="#">
            <a-icon type="home" @click="handleBreadcrumbHome()"/>
          </a-breadcrumb-item>
          <a-breadcrumb-item v-for="(item,index) in fpath" href="#" :key="index">
            <span @click="handleBreadcrumb(index)">{{item}}</span>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div>
        显示隐藏文件：<a-switch checked-children="开" un-checked-children="关" default-checked v-model="showHideFiles"/>
        <a-upload
          name="file"
          :showUploadList="false"
          :data="{id:id,path:fullPath}"
          :multiple="false"
          :action="actionUrl"
          :headers="headers"
          @change="uploadHandleChange"
        >
          <a-button style="margin-left:5px;" type="primary" size="small" icon="upload">上传文件</a-button>
        </a-upload>
        <a-button style="margin-left:5px;" type="primary" size="small" icon="plus" @click="showAddDirModal">新建文件夹</a-button>
      </div>
    </div>
      <a-table 
        size="small" 
        :loading="fileTableLoading" 
        :scroll="{ y: 750 }" 
        :pagination="false" 
        :columns="filesColumns" 
        :data-source="filesDataList"
        :customRow="rowHover"
        >
        <template slot="filename" slot-scope="text, record">
          <a v-if="record.type === 'd'" @click="clickFilesPath(record.name)">
            <a-icon type="folder" />
            <span style="padding-left:5px">{{record.name}}</span>
          </a>
          <div v-else>
            <a-icon type="file" />
            <span style="padding-left:5px">{{record.name}}</span>
          </div>
        </template>
        <template slot="action" slot-scope="text, record">
          <div v-if="record.type === '-'">
            <a><a-icon type="download" @click="downloadFile(record.name)"/></a>
            <a-divider type="vertical" />
            <a style="color:#04a4ff;" @click="showRenameModal(record.name)"><a-icon type="edit" /></a>
            <a-divider type="vertical" />
            <a style="color:red;" @click="deleteFile(record.name)"><a-icon type="delete" /></a>
          </div>
          <div v-if="hoverRowName == record.name&&record.type === 'd'">
            <a style="color:#04a4ff;" @click="showRenameModal(record.name)"><a-icon type="edit" /></a>
            <a-divider type="vertical" />
            <a style="color:red;" @click="deleteDir(record.name)"><a-icon type="delete" /></a>
          </div>
        </template>
      </a-table>
    </a-drawer>
    <a-modal
      title="新建文件夹"
      :visible="addDirVisible"
      @ok="addDirHandleOk"
      cancelText="取消"
      okText="确定"
      @cancel="addDirHandleCancel"
    >
      <a-input v-model="dirName" :maxLength="20" placeholder="请输入要创建的文件夹名" />
    </a-modal>
    <a-modal
      title="重命名"
      :visible="renameVisible"
      @ok="renameHandleOk"
      cancelText="取消"
      okText="确定"
      @cancel="renameHandleCancel"
    >
      <a-input v-model="newName" :maxLength="20" placeholder="请输入要重命名的文件夹或者文件" />
    </a-modal>
  </div>
</template>

<script>
  export default {
    name: 'FilesManage',
    data () {
      return {
        odlName: '',
        newName: '',
        renameVisible: false,
        hoverRowName: '',
        dirName: '',
        addDirVisible: false,
        fullPath:'',
        headers:{
          token: sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo')).token:null
        },
        actionUrl: process.env.VUE_APP_BASE_API+'/api/host_service/files/uploadFile',
        showHideFiles: false,
        fpath: [],
        fileTableLoading: false,
        filesColumns: [
          {
            width: 350,
            title: '文件名',
            dataIndex: 'name',
            key: 'name',
            scopedSlots: { customRender: 'filename' },
          },
          {
            width: 70,
            align: 'right',
            title: '大小',
            dataIndex: 'size',
            key: 'size',
          },
          {
            width: 200,
            align: 'right',
            title: '修改时间',
            dataIndex: 'mtime',
            key: 'mtime',
          },
          {
            align: 'right',
            title: '属性',
            dataIndex: 'attribute',
            key: 'attribute',
          },
          {
            align: 'center',
            title: '操作',
            dataIndex: 'action',
            key: 'attrs',
            scopedSlots: { customRender: 'action' }
          },
        ],
        filesDataList: [],
        filesDataListNew: [],
      };
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      id: {
        type: Number,
        default: null
      }
    },
    watch: {
      visible (val) {
        if(val){
          let path = '/'+this.fpath.join('/');
          this.fullPath = path;
          this.readFile(path);
        }
      },
      fpath (val) {
        let path = '/'+val.join('/');
        this.fullPath = path;
        this.readFile(path);
      },
      showHideFiles (val){
        if(val){
          this.filesDataList = this.filesDataListNew;
        }else{
          this.filesDataList = this.filesDataListNew.filter(r=>{return r.name.substring(0,1)!=='.';});
        }
      },
    },
    methods: {
      showRenameModal (odlName){
        this.odlName = odlName;
        this.newName = odlName;
        this.renameVisible = true;
      },
      rowHover (record){
        return {
          on: {
            mouseenter: () => {
              this.hoverRowName = record.name;
            },
            mouseleave: () => {
              this.hoverRowName = '';
            }
          },
        };
      },
      deleteDir (dirName){
        let _this = this;
        _this.$confirm({
          title: '删除提示',
          content: `确定要删除（${dirName}）文件夹吗？`,
          okType: 'danger',
          okText: '确定',
          cancelText: '取消',
          onOk () {
            return new Promise((resolve, reject) => {
              let data = {
                id: _this.id,
                path: _this.fullPath,
                dirName: dirName
              };
              _this.$api.servers.deleteHostDir(data).then(res=>{
                resolve();
                _this.$message.success(res.msg);
                _this.readFile(_this.fullPath);
              }).catch(()=>{
                reject();
              });
            });
          },
          onCancel () {},
        });
      },
      renameHandleOk (){
        let data = {
          id: this.id,
          path: this.fullPath,
          odlName: this.odlName,
          newName: this.newName
        };
        this.$api.servers.renameFileOrDir(data).then(res=>{
          this.$message.success(res.msg);
          this.renameVisible = false;
          this.readFile(this.fullPath);
        });
      },
      renameHandleCancel (){
        this.renameVisible = false;
      },
      addDirHandleCancel (){
        this.addDirVisible = false;
      },
      addDirHandleOk (){
        let data = {
          id: this.id,
          path: this.fullPath,
          dirName: this.dirName
        };
        this.$api.servers.createHostDir(data).then(res=>{
          this.$message.success(res.msg);
          this.readFile(this.fullPath);
          this.addDirVisible = false;
        });
      },
      showAddDirModal (){
        this.dirName = '';
        this.addDirVisible = true;
      },
      deleteFile (fileName){
        let _this = this;
        this.$confirm({
          title: '删除提示',
          content: `确定要删除（${fileName}）文件吗？`,
          okType: 'danger',
          okText: '确定',
          cancelText: '取消',
          onOk () {
            return new Promise((resolve, reject) => {
              let data = {
                id:_this.id,
                path: _this.fullPath,
                fileName: fileName
              };
              _this.$api.servers.deleteHostFile(data).then(res=>{
                resolve();
                _this.readFile(_this.fullPath);
                _this.$message.success(res.msg);
              }).catch(()=>{
                reject();
              });
            });
          },
          onCancel () {},
        });
      },
      downloadFile (fileName){
        let data = {
          id:this.id,
          path: this.fullPath,
          fileName: fileName
        };
        this.$api.servers.downloadHostFile(data).then(blob => {
          var downloadElement = document.createElement('a');
          var href = window.URL.createObjectURL(blob);
          downloadElement.href = href;
          downloadElement.download = `${fileName}`;
          document.body.appendChild(downloadElement);
          downloadElement.click();
          document.body.removeChild(downloadElement);
          window.URL.revokeObjectURL(href);
        });
      },
      uploadHandleChange (info){
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          this.readFile(this.fullPath);
          this.$message.success(`${info.file.name} 上传成功！`);
        } else if (info.file.status === 'error') {
          this.$message.error(`${info.file.name} 上传失败！`);
        }
      },
      clickFilesPath (path){
        this.fpath.push(path);
      },
      handleBreadcrumbHome (){
        this.fpath = [];
      },
      handleBreadcrumb (index){
        let arr = JSON.parse(JSON.stringify(this.fpath));
        let newpath = [];
        arr.map((r,i)=>{
          if(i<=index){
            newpath.push(r);
          }
        });
        this.fpath = newpath;
      },
      readFile (path){
        this.fileTableLoading = true;
        let data = {
          id: this.id,
          path: path
        };
        this.$api.servers.readHostFiles(data).then(res=>{
          if(this.showHideFiles){
            this.filesDataList = res.data;
          }else{
            this.filesDataList = res.data.filter(r=>{return r.name.substring(0,1)!=='.';});
          }
          this.filesDataListNew = res.data;
          this.fileTableLoading = false;
        });
      },
      onClose () {
        this.$emit('update:visible',false);
      }
    },
  };
</script>

<style lang="less" scoped>
  .headerRow{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
</style>