const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx, app } = this;
    const { userName, password } = ctx.request.body;
    const user = await ctx.model.User.findAll()
    // 初始登陆如果数据库里没有账号默认创建一个
    if (user.length === 0) {
      const iv = this.app.config.iv;
      const key = this.app.config.key;
      const pwd = this.ctx.helper.aesEncrypt(key,iv,password)
      const r = await ctx.model.User.create({
        user_id: 1000,
        user_name: userName,
        user_pwd: pwd,
      });
    }
    const { result } = await ctx.service.login.login(userName, password);

    if(result.length>0){
      
      const token = app.jwt.sign({
        'userName': userName, //需要存储的 token 数据
      }, app.config.jwt.secret, { expiresIn: '3h' }); // 3htoken过期
      
      ctx.set({'token':token})//设置headers
      ctx.body = {
        code: '200',
        data: {
          token: token,
          userName: result[0].user_name,
          userId: result[0].user_id
        },
        msg: 'success'
      };

    }else{

      ctx.body = {
        code: '100',
        data: result,
        msg: '账号或密码错误'
      };

    }
  }
}

module.exports = LoginController;