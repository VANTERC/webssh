const Controller = require('egg').Controller;

class XtermController extends Controller {
  async create() {
    const { ctx } = this
    let retdata = await ctx.service.host.getHostInfoById(ctx.args[0])
    if(retdata&&retdata.length>0){
      await ctx.service.xterm.create(ctx.socket,retdata[0].host_ip,ctx.args[3],retdata[0].host_port,retdata[0].host_rootName,ctx.args[1],ctx.args[2]);
    }else{
      ctx.socket.emit('error', "查询主机信息失败")
      ctx.socket.disconnect();
    }
  }
}

module.exports = XtermController;