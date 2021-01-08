const Service = require('egg').Service;

class UserService extends Service {
  async getData() {
    const data = await this.app.mysql.query('SELECT `user_name`,`user_id` FROM t_user');
    return { data };
  }

  async updateUserInfo(username,password,userId) {
    let iv = this.app.config.iv;
    let key = this.app.config.key;
    const pwd = this.ctx.helper.aesEncrypt(key,iv,password)
    const row = {
      user_name: username,
      user_pwd: pwd
    }
    const options = {
      where: {
        user_id: userId
      }
    };
    const result = await this.app.mysql.update('t_user', row, options);
    const updateSuccess = result.affectedRows === 1;
    return { updateSuccess };
  }
}

module.exports = UserService;