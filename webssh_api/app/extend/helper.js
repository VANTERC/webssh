const crypto = require('crypto');
const moment = require('moment');
module.exports = {
  formatBytes(a, b) {
    if (0 == a) return "0 B";
    let c = 1024,
    d = b || 2,
    e = ["B", "K", "M", "G", "T", "P", "E", "Z", "Y"],
    f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
  },
  formatDate(time) {
    return moment(time*1000).format('YYYY-MM-DD HH:mm:ss');
  },
  // 解密
  aesDecrypt(socket,key, iv, crypted) {
    crypted = new Buffer.from(crypted, 'base64').toString('binary');
    let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    let data = ''
    try {
      data = decipher.update(crypted, 'binary', 'utf8') + decipher.final('utf8');
    } catch (error) {
      // socket.emit('shell-output', "密码验证错误，请检查密码");
      console.log(error)
    }
    return data
  },
  // 加密
  aesEncrypt(key, iv, data) {
    let decipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    return decipher.update(data, 'binary', 'base64') + decipher.final('base64');
  },
  // 文件目录按英文首字母排序
  fileorDirSort(arr){
    let d = []
    let f = []
    arr.map(r=>{
      if(r.type === 'd'){
        d.push(r)
      }else{
        f.push(r)
      }
    })
    d.sort(function(a, b) {
      return (a.name + '').localeCompare(b.name + '')
    })
    f.sort(function(a, b) {
      return (a.name + '').localeCompare(b.name + '')
    })
    return d.concat(f);
  },
}