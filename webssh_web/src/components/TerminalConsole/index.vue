<template>
  <div class="terminalConsole">
    <div id="terminal" style="width:100%;"></div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
import { FitAddon } from 'xterm-addon-fit';
export default {
  name: 'TerminalConsole',
  data () {
    return {
      term: null,
      socket: null
    };
  },
  props: {
    id: {
      type: Number,
      default: null
    },
  },
  mounted () {
    this.init();
  },
  destroyed () {
    this.socket.close();
  },
  methods: {
    init (){
      this.term = new Terminal({
        cursorBlink: true, // 光标闪烁
        cols:3000
      });
      const fitPlugin = new FitAddon();
      this.term.loadAddon(fitPlugin);
      let token = sessionStorage.getItem('userInfo')
          ? JSON.parse(sessionStorage.getItem('userInfo')).token
          : null;
      this.socket = io(`${process.env.VUE_APP_BASE_API}/scoket?token=${token}`);
      this.socket.on('connect', () => {
        this.socket.emit('api/scoket', this.id,this.term.cols, this.term.rows);
      });
      this.socket.on('socket_res', (data) => {
        console.log(data);
      });
      this.socket.on('error', (e) => {
        console.log(e);
        this.$message.error('连接失败，请检查服务器账号密码是否正确！');
      });
      this.socket.on('error-token', (e) => {
        console.log(e);
        this.$message.error(e);
      });
      this.socket.on('shell-output', (e) => {
        this.term.write(e);
      });
      this.term.open(document.getElementById('terminal'));
      this.term.focus();
      fitPlugin.fit();
      this.socket.onclose = e => {
        setTimeout(() => this.term.write('\r\nConnection is closed.\r\n'), 200);
      };
      this.term.onData(data => {
        this.socket.emit('shell-input',JSON.stringify({data}));
      });
      let _this = this
      window.addEventListener('resize', ()=>{
        _this.socket.emit('resize', { cols: _this.term.cols, rows: _this.term.rows })
        fitPlugin.fit()
      }, false)
    },
  },
};
</script>
<style lang="less" scoped>
  .terminalConsole{
    flex: 1;
    display: flex;
    background-color: #000;
    padding-left: 5px;
  }
</style>
