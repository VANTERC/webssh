const Service = require('egg').Service;
const crypto = require('crypto');

class LoginService extends Service {
  
  async login(username,password) {
    let iv = this.app.config.iv;
    let key = this.app.config.key;
    const pwd = this.ctx.helper.aesEncrypt(key,iv,password)
    const data = await this.app.mysql.query(`SELECT * FROM t_user WHERE user_name='${username}' and user_pwd='${pwd}'`);
    const result = JSON.parse( JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }
}

module.exports = LoginService;