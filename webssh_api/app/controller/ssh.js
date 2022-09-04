const Controller = require('egg').Controller;

class SSHController extends Controller {
  async SSHVerification() {
    const { ctx } = this;
    const { sshObj } = ctx.request.body;
    const res = await ctx.service.ssh.SSHVerify(sshObj);
    if(res.state){
      ctx.body = {
        code: '200',
        data: res.state,
        msg: '验证成功！'
      };
    }else{
      ctx.body = {
        code: '100',
        data: res.state,
        msg: '验证失败！请确认密码是否正确！'
      };
    }
  }
}

module.exports = SSHController;