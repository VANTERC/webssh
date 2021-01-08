const Controller = require('egg').Controller;

class UserController extends Controller {

  async getUser() {
    const { ctx } = this;
    const res = await ctx.service.user.getData();
    ctx.body = {
      code: '200',
      data: res.data,
      msg: 'success'
    };
  }

  async updateUserInfo() {
    const { ctx } = this;
    const { username,password,userId } = ctx.request.body;
    const res = await ctx.service.user.updateUserInfo(username,password,userId);
    if(res){
      ctx.body = {
        code: '200',
        msg: '修改成功'
      };
    }else{
      ctx.body = {
        code: '100',
        msg: '修改失败'
      };
    }
  }
}

module.exports = UserController;