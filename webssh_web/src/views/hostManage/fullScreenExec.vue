<template>
  <div class="fullScreenExec">
    <div class="terminal-header">
      当前连接主机:{{hostInfo}}
      <a-button type="primary" icon="folder-open" @click="openFilesManage">
      文件管理
    </a-button>
    </div>
    <TerminalConsole :id="id"></TerminalConsole>
    <FilesManage :visible.sync="showFilesManage" :id="id"></FilesManage>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hostInfo: '',
        id: null,
        showFilesManage: false
      };
    },
    created () {
      this.id = Number(this.$route.params.id);
      this.getHostInfo();
    },
    methods: {
      getHostInfo (){
        let data = {
          id: this.id
        };
        this.$api.servers.getHostInfoById(data).then(res=>{
          this.hostInfo = `${res.data.hostName}|${res.data.rootName}@${res.data.ip}:${res.data.port}`;
        });
      },
      openFilesManage (){
        this.showFilesManage = true;
      },
    },
  };
</script>

<style lang="less" scoped>
  .fullScreenExec{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .terminal-header{
    height: 46px;
    justify-content: space-between;
    padding: 0 10px;
    background-color: #bee9d7;
    display: flex;
    align-items: center;
  }
</style>