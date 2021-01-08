const Service = require('egg').Service;
const sftpClient = require('ssh2-sftp-client');
const { Client } = require('ssh2');
const fs = require('fs')

class SSHService extends Service {
  getSSH(sshObj){
    return new Promise(function(resolve,reject){
      const conn = new Client();
      conn.on('ready', () => {
        resolve(true)
      }).on('error', () => {
        resolve(false)
      }).connect(sshObj);
    })
  }

  async SSHVerify(sshObj) {
    let state = await this.getSSH(sshObj)
    return { state };
  }

  async readFiles(ip,path,password,port,username){
    let iv = this.app.config.iv;
    let key = this.app.config.key;
    let pwd = this.ctx.helper.aesDecrypt('',key,iv,password)
    return new Promise((resolve,reject) => {
      const conn = new Client();
      conn.on('ready', () => {
        conn.sftp((err, sftp) => {
          if (err) { resolve(err) }
          sftp.readdir('..'+path, (err, list) => {
            if (err) { resolve(err) }
            if(list){
              resolve(list)
            }else{
              resolve([])
            }
          });
        });
      }).on('error', () => {
        resolve([])
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: pwd
      });
    })
  }

  async uploadFile(file,path,ip,password,port,username){
    let iv = this.app.config.iv;
    let key = this.app.config.key;
    let pwd = this.ctx.helper.aesDecrypt('',key,iv,password)
    return new Promise((resolve,reject) => {
      const conn = new Client();
      let remotePath = '..'+(path=== '/'? path : path+'/')+file.filename
      conn.on('ready', () => {
        conn.sftp(function(err, sftp){
          if(err){
            then(err);
          }else{
            sftp.fastPut(file.filepath, remotePath, function(err, result){
              resolve(200)
              conn.end();
            });
          }
        });
      }).on('error', () => {
        resolve(100)
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: pwd
      });
    })
  }

  async downloadFile(fileName,path,ip,password,port,username){
    let iv = this.app.config.iv;
    let key = this.app.config.key;
    let pwd = this.ctx.helper.aesDecrypt('',key,iv,password)
    return new Promise((resolve,reject) => {
      const sftp = new sftpClient();
      let dst = fs.createWriteStream('./.repos/filestream')
      let remotePath = '..'+(path=== '/'? path : path+'/')+fileName
      sftp.connect({
        host: ip,
        port: port,
        username: username,
        password: pwd
      }).then(() => {
        return sftp.get(remotePath, dst);
      })
      .then(() => {
        resolve(200)
        sftp.end();
      })
      .catch(err => {
        resolve(err.message)
        console.error(err.message);
      });
    })
  }

  async deleteFile(fileName,path,ip,password,port,username){
    let iv = this.app.config.iv;
    let key = this.app.config.key;
    let pwd = this.ctx.helper.aesDecrypt('',key,iv,password)
    return new Promise((resolve,reject) => {
      let remoteFile = '..'+(path=== '/'? path : path+'/')+fileName
      const sftp = new sftpClient();
      sftp.connect({
        host: ip,
        port: port,
        username: username,
        password: pwd
      })
      .then(() => {
        return sftp.delete(remoteFile);
      })
      .then(() => {
        resolve(200)
        return sftp.end();
      })
      .catch(err => {
        resolve(err.message)
        console.error(err.message);
      });
    })
  }

  async createDir(dirName,path,ip,password,port,username){
    let iv = this.app.config.iv;
    let key = this.app.config.key;
    let pwd = this.ctx.helper.aesDecrypt('',key,iv,password)
    return new Promise((resolve,reject) => {
      let remoteDir = '..'+(path=== '/'? path : path+'/')+dirName
      const sftp = new sftpClient();
      sftp.connect({
        host: ip,
        port: port,
        username: username,
        password: pwd
      })
      .then(() => {
        return sftp.mkdir(remoteDir,true);
      })
      .then(() => {
        resolve(200)
        return sftp.end();
      })
      .catch(err => {
        resolve(err.message)
        console.error(err.message);
      });
    })
  }

  async deleteDir(dirName,path,ip,password,port,username){
    let iv = this.app.config.iv;
    let key = this.app.config.key;
    let pwd = this.ctx.helper.aesDecrypt('',key,iv,password)
    return new Promise((resolve,reject) => {
      let remoteDir = '..'+(path=== '/'? path : path+'/')+dirName
      const sftp = new sftpClient();
      sftp.connect({
        host: ip,
        port: port,
        username: username,
        password: pwd
      })
      .then(() => {
        return sftp.rmdir(remoteDir,true);
      })
      .then(() => {
        resolve(200)
        return sftp.end();
      })
      .catch(err => {
        resolve(err.message)
        console.error(err.message);
      });
    })
  }

  async renameFileOrDir(odlName,newName,path,ip,password,port,username){
    let iv = this.app.config.iv;
    let key = this.app.config.key;
    let pwd = this.ctx.helper.aesDecrypt('',key,iv,password)
    return new Promise((resolve,reject) => {
      let from = '..'+(path=== '/'? path : path+'/')+odlName
      let to = '..'+(path=== '/'? path : path+'/')+newName
      const sftp = new sftpClient();
      sftp.connect({
        host: ip,
        port: port,
        username: username,
        password: pwd
      })
      .then(() => {
        return sftp.rename(from,to);
      })
      .then(() => {
        resolve(200)
        return sftp.end();
      })
      .catch(err => {
        resolve(err.message)
        console.error(err.message);
      });
    })
  }
}

module.exports = SSHService;