const Service = require('egg').Service;
const { Client } = require('ssh2');
const paths = require('path');
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
    return new Promise((resolve,reject) => {
      const conn = new Client();
      conn.on('ready', () => {
        conn.sftp((err, sftp) => {
          if (err) { resolve(err) }
          sftp.readdir('..'+path, (err, list) => {
            if (err) { resolve(err) }
            if(list){
              resolve(list)
              conn.end();
            }else{
              resolve([])
              conn.end();
            }
          });
        });
      }).on('error', () => {
        resolve([])
        conn.end();
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: password
      });
    })
  }

  async uploadFile(file,path,ip,password,port,username){
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
        conn.end();
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: password
      });
    })
  }

  async downloadFile(fileName,path,ip,password,port,username){
    return new Promise((resolve,reject) => {
      const conn = new Client();
      let remotePath = '..'+(path=== '/'? path : path+'/')+fileName
      console.log(remotePath);
      conn.on('ready', () => {
        conn.sftp(function(err, sftp){
          if(err){
            then(err);
          }else{
            let rstream = sftp.createReadStream(remotePath);
            let wstream = fs.createWriteStream(paths.join('','.repos','filestream'));
            rstream.pipe(wstream);
            rstream.on('error', function (err) { 
              console.log(err.message);
              conn.end();
              rstream.destroy();
              wstream.destroy();
            });
            rstream.on('end', function () {
                conn.end();
            });
            wstream.on('finish', function () {
              resolve(200)
              conn.end();
            });
          }
        });
      }).on('error', () => {
        resolve(100)
        conn.end();
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: password
      });
    })
  }

  async deleteFile(fileName,path,ip,password,port,username){
    return new Promise((resolve,reject) => {
      let remoteFile = '..'+(path=== '/'? path : path+'/')+fileName
      const conn = new Client();
      conn.on('ready', () => {
        conn.exec('rm -rf '+remoteFile,function(err, result){
          resolve(200)
          conn.end();
        })
      }).on('error', () => {
        resolve(100)
        conn.end();
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: password
      });
    })
  }

  async createDir(dirName,path,ip,password,port,username){
    return new Promise((resolve,reject) => {
      let remoteDir = '..'+(path=== '/'? path : path+'/')+dirName
      const conn = new Client();
      conn.on('ready', () => {
        conn.sftp(function(err, sftp){
          if(err){
            then(err);
          }else{
            sftp.mkdir(remoteDir, function(err, result){
              resolve(200)
              conn.end();
            });
          }
        });
      }).on('error', () => {
        resolve(100)
        conn.end();
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: password
      });
    })
  }

  async deleteDir(dirName,path,ip,password,port,username){
    return new Promise((resolve,reject) => {
      let remoteDir = '..'+(path=== '/'? path : path+'/')+dirName
      const conn = new Client();
      conn.on('ready', () => {
        conn.sftp(function(err, sftp){
          if(err){
            then(err);
          }else{
            sftp.rmdir(remoteDir, function(err, result){
              resolve(200)
              conn.end();
            });
          }
        });
      }).on('error', () => {
        resolve(100)
        conn.end();
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: password
      });
    })
  }

  async renameFileOrDir(odlName,newName,path,ip,password,port,username){
    return new Promise((resolve,reject) => {
      let from = '..'+(path=== '/'? path : path+'/')+odlName
      let to = '..'+(path=== '/'? path : path+'/')+newName
      const conn = new Client();
      conn.on('ready', () => {
        conn.sftp(function(err, sftp){
          if(err){
            then(err);
          }else{
            sftp.rename(from,to, function(err, result){
              resolve(200)
              conn.end();
            });
          }
        });
      }).on('error', () => {
        resolve(100)
        conn.end();
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: password
      });
    })
  }
}

module.exports = SSHService;