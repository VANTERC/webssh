<template>
  <div>
    <a-card>
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-row>
          <a-col :span="8">
            <a-form-item label="主机名称">
              <a-input v-model="hostForm.hostName"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="连接IP">
              <a-input v-model="hostForm.hostIP"/>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-button type="primary" @click="searchList">搜索</a-button>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span='8'>
            <a-button type="primary" @click="addHost">新增</a-button>
          </a-col>
        </a-row>
      </a-form>
      <a-table :data-source="tableData" style="margin-top:20px;" rowKey="id" :loading="tableLoading">
        <a-table-column key="merchants" title="主机供应商" data-index="merchants">
          <template slot-scope="text">
            <span>{{merchantsList.filter(r=>{return r.code === text})[0].name}}</span>
          </template>
        </a-table-column>
        <a-table-column key="hostName" title="主机名称" data-index="hostName" />
        <a-table-column key="hostIp" title="连接IP" data-index="hostIp" />
        <a-table-column key="port" title="端口" data-index="port" />
        <a-table-column key="configure" title="配置" data-index="configure" />
        <a-table-column key="remarks" title="备注" data-index="remarks" />
        <a-table-column key="options" title="操作" data-index="options">
          <template slot-scope="text,record">
            <a @click="editHost(record)">编辑</a>
            <a-divider type="vertical" />
            <a @click="deleteHost(record.id)" style="color:red;">删除</a>
            <a-divider type="vertical" />
            <a @click="linkhost(record)">console</a>
          </template>
        </a-table-column>
      </a-table>
    </a-card>
    <a-modal
      :width="800"
      :title="modalTitle"
      :visible="addVisible"
      :confirm-loading="addconfirmLoading"
      @ok="addhandleOk"
      okText="确定"
      @cancel="addhandleCancel"
      cancelText="取消"
    >
      <a-form :form="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }">
        <a-form-item label="主机供应商">
          <a-select style="width:200px;"
            placeholder="请选择供应商"
            v-decorator="['merchants', { rules: [{ required: true, message: '请选择供应商！' }] }]">
            <a-select-option v-for="item in merchantsList" :value="item.code" :key="item.code">{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="主机名称">
          <a-input
            placeholder="请输入主机名称"
            v-decorator="['hostName', { rules: [{ required: true, message: '请输入主机名称！' }] }]"
          />
        </a-form-item>
         <a-form-item label="连接IP" required>
          <div style="display:flex;">
            <div>
                <a-form-item style="margin-bottom:0px;">
                  <a-input
                    addon-before="SSH:"
                    placeholder="用户名"
                    style="max-width:180px"
                    v-decorator="['rootName', { rules: [{ required: true, message: '请输入用户名！' }] }]"
                  />
              </a-form-item>
            </div>
            <div>
              <a-form-item style="margin-bottom:0px;">
                <a-input
                  addon-before="@"
                  style="max-width:200px"
                  placeholder="IP地址"
                  v-decorator="['ip', { rules: [{ required: true, message: '请输入IP地址!' }] }]"
                />
              </a-form-item>
            </div>
            <div>
              <a-form-item style="margin-bottom:0px;">
                <a-input
                  addon-before="-p"
                  style="max-width:120px"
                  placeholder="端口:22"
                  v-decorator="['port', { rules: [{ required: true, message: '请输入端口!' }] }]"
                />
              </a-form-item>
            </div>
          </div>
        </a-form-item>
        <a-form-item label="配置">
          <a-input
            placeholder="请输入服务器配置，如：1核2G"
            v-decorator="['configure', { rules: [{ required: false}] }]"
          />
        </a-form-item>
        <a-form-item label="备注">
          <a-textarea
            placeholder="请输入主机备注信息"
            v-decorator="['remarks', { rules: [{ required: false}] }]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal
      :width="300"
      title="请输入登录密码验证连接"
      :visible="passwordVisible"
    >
    <a-input-password placeholder="请输入密码" v-model="host_password"/>
    <a-icon type="warning" style="color:#ff6400;"/> <span style="color: #ff0000;font-size: 12px;">注：系统不会保存您的密码</span>
      <template slot="footer">
        <a-button key="back" @click="pdwVisibleCancel">
          取 消
        </a-button>
        <a-button key="submit" type="primary" :loading="sshVerifyLoading" @click="pwdVisibleHandleOk">
          验 证
        </a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        modalTitle: '新增主机',
        isEdit: false,
        hostForm: {
          hostName: '',
          hostIP: ''
        },
        form: this.$form.createForm(this, { name: 'createForm' }),
        createForm:{
          merchants: '',
          hostName: '',
          rootName: '',
          ip: '',
          port: '',
          configure: '',
          remarks: ''
        },
        host_password: '',
        updateRowId: '',
        tableData:[],
        addVisible: false,
        passwordVisible: false,
        addconfirmLoading: false,
        sshVerifyLoading:false,
        tableLoading: false,
        merchantsList:[
          {name: '阿里云', code: 'm_001'},
          {name: '腾讯云', code: 'm_002'},
          {name: '百度云', code: 'm_003'},
          {name: '华为云', code: 'm_004'},
          {name: '网易云', code: 'm_005'},
          {name: '其他', code: 'm_006'}
        ],
        selectHostObj:{}
      };
    },
    created () {
      this.searchList();
    },
    methods: {
      linkhost (row){
        this.host_password = '';
        this.selectHostObj = row;
        this.passwordVisible = true;
      },
      updateHost (){
        let data = {
          id: this.updateRowId,
          merchants: this.createForm.merchants,
          hostName: this.createForm.hostName,
          rootName: this.createForm.rootName,
          ip: this.createForm.ip,
          port: this.createForm.port,
          configure: this.createForm.configure,
          remarks: this.createForm.remarks,
          password: this.createForm.password
        };
        this.$api.servers.updateHost(data).then(()=>{
          this.$message.success('编辑成功');
          this.addVisible = false;
          this.addconfirmLoading = false;
          this.searchList();
          this.form.resetFields();
          this.createForm.password = '';
          this.passwordVisible = false;
        }).catch(()=>{
          this.addconfirmLoading = false;
        });
      },
      editHost (row){
        this.modalTitle = '编辑主机';
        this.isEdit = true;
        this.addVisible = true;
        this.updateRowId = row.id;
        this.createForm.merchants = row.merchants;
        this.createForm.hostName = row.hostName;
        this.createForm.rootName = row.rootName;
        this.createForm.ip = row.hostIp;
        this.createForm.port = row.port;
        this.createForm.configure = row.configure;
        this.createForm.remarks = row.remarks;
        this.$nextTick(()=>{
          this.form.setFieldsValue({
            merchants: row.merchants,
            hostName: row.hostName,
            rootName: row.rootName,
            ip: row.hostIp,
            port: row.port,
            configure: row.configure,
            remarks: row.remarks
          });
        });
      },
      deleteHost (id){
        let _this = this;
        this.$confirm({
          title: '确定要删除该主机吗?',
          okText: '确认',
          cancelText: '取消',
          onOk () {
            let data = {
              id: id
            };
            _this.$api.servers.deleteHost(data).then(()=>{
              _this.$message.success('删除成功！');
              _this.searchList();
            });
          },
          onCancel () {
            console.log('Cancel');
          }
        });
      },
      searchList (){
        this.tableLoading = true;
        this.$api.servers.getHostList(this.hostForm).then(res=>{
          this.tableData = res.data;
          this.tableLoading = false;
        });
      },
      verifyHost (){
        let _this = this;
        let data = {
          sshObj:{
            host:this.selectHostObj.hostIp,
            port:this.selectHostObj.port,
            username:this.selectHostObj.rootName,
            password:this.host_password
          }
        };
        this.$api.servers.SSHVerify(data).then(res=>{
          if(res.data){
            let hostdatas = sessionStorage.HOSTDATA?JSON.parse(sessionStorage.HOSTDATA):[]
            let hostObj = {
              hostId:this.selectHostObj.id,
              host: this.selectHostObj.hostIp,
              username: this.selectHostObj.rootName,
              password: this.host_password
            }
           if(hostdatas.length>0){
            if(hostdatas.some((e)=>{return e.host === this.selectHostObj.hostIp})){
              hostdatas.map(r=>{
                if(r.host === this.selectHostObj.hostIp){
                  r = hostObj
                }
              })
            }else{
              hostdatas.push(hostObj)
            }
           }else{
            hostdatas.push(hostObj)
           }
           
            sessionStorage.setItem('HOSTDATA',JSON.stringify(hostdatas))
            this.$message.success('验证成功！');
            this.sshVerifyLoading = false;
            this.passwordVisible = false;
            setTimeout(() => {
              let routeUrl = _this.$router.resolve({
                  path: `/webssh/${_this.selectHostObj.id}`
              });
              window.open(routeUrl .href, '_blank');
            }, 1000);
          }else{
            this.$message.warning('验证失败，请确认密码是否正确！');
            this.sshVerifyLoading = false;
          }
        }).catch((()=>{
          this.sshVerifyLoading = false;
        }));
      },
      addHost () {
        this.modalTitle = '新增主机';
        this.addVisible = true;
        this.isEdit = false;
      },
      addhandleOk (){
        this.form.validateFields((err,fieldsValue) => {
          if (!err) {
            this.createForm.merchants = fieldsValue.merchants;
            this.createForm.hostName = fieldsValue.hostName;
            this.createForm.rootName = fieldsValue.rootName;
            this.createForm.ip = fieldsValue.ip;
            this.createForm.port = fieldsValue.port;
            this.createForm.configure = fieldsValue.configure ? fieldsValue.configure: '';
            this.createForm.remarks = fieldsValue.remarks ? fieldsValue.remarks:'';
            this.addconfirmLoading = true;
            if(this.isEdit){
              this.updateHost();
            }else{
              this.$api.servers.createHost(this.createForm).then(()=>{
                this.addVisible = false;
                this.addconfirmLoading = false;
                this.searchList();
                this.form.resetFields();
              }).catch(()=>{
                this.addconfirmLoading = false;
              });
            }
          }else{
            this.addconfirmLoading = false;
          }
        });
      },
      pdwVisibleCancel (){
        this.passwordVisible = false;
      },
      addhandleCancel () {
        this.addVisible = false;
        this.form.resetFields();
        this.createForm.password = '';
      },
      pwdVisibleHandleOk (){
        if(!this.host_password){
          this.$message.warning('请输入登录密码！');
        }else{
          this.sshVerifyLoading = true;
          this.verifyHost();
        }
      },
    },
  };
</script>

<style lang="less" scoped>

</style>