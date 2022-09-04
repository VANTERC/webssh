const Controller = require('egg').Controller;
const fs = require('fs')
class filesController extends Controller {
  async readFiles() {
    const { ctx } = this;
    const { id, path, pwd } = ctx.request.body;
    let retdata = await ctx.service.host.getHostInfoById(id)
    if(retdata&&retdata.length>0){
      const res = await ctx.service.ssh.readFiles(retdata[0].host_ip,path,pwd,retdata[0].host_port,retdata[0].host_rootName);
      let resultData = res.map(r=>{
        let t = r.longname.substring(0,1)
        return {
          name: r.filename,
          size: t === 'd' ? '' : ctx.helper.formatBytes(r.attrs.size),
          mtime: ctx.helper.formatDate(r.attrs.mtime),
          type: t,
          attribute: r.longname.substring(0,10)
        }
      })
      ctx.body = {
        code: '200',
        data: ctx.helper.fileorDirSort(resultData),
        msg: 'success'
      };
    }else{
      ctx.body = {
        code: '100',
        msg: '主机连接失败'
      };
    }
  }

  async uploadFile(){
    const { ctx } = this;
    const { id,path,pwd } = ctx.request.body;
    const file = ctx.request.files[0]
    let retdata = await ctx.service.host.getHostInfoById(id)
    if(retdata&&retdata.length>0){
      const res = await ctx.service.ssh.uploadFile(file,path,retdata[0].host_ip,pwd,retdata[0].host_port,retdata[0].host_rootName)
      if(res===200){
        ctx.body = {
          code: '200',
          msg: '上传成功！'
        };
      }else{
        ctx.body = {
          code: '100',
          msg: '上传失败！'
        };
      }
    }else{
      ctx.body = {
        code: '100',
        msg: '主机连接失败'
      };
    }
  }

  async downloadFile(){
    const { ctx } = this;
    const { id,path,fileName,pwd } = ctx.request.body;
    let retdata = await ctx.service.host.getHostInfoById(id)
    if(retdata&&retdata.length>0){
      const res = await ctx.service.ssh.downloadFile(fileName,path,retdata[0].host_ip,pwd,retdata[0].host_port,retdata[0].host_rootName)
      if(res===200){
        ctx.attachment(fileName,{
          fallback:true,
          type:'attachment'
        });
        let filePath = './.repos/filestream'
        const fileSize = fs.statSync(filePath).size;
        ctx.set('Content-Length',fileSize) 
        ctx.set('Content-Type', 'application/octet-stream')
        ctx.set('Content-Disposition', `attachment;filename=${encodeURIComponent(fileName)}`)
        ctx.body = fs.createReadStream(filePath);
      }else{
        ctx.status = 404
        ctx.body = {
          code: '100',
          msg: '下载失败！'
        };
      }
    }else{
      ctx.body = {
        code: '100',
        msg: '主机连接失败'
      };
    }
  }

  async deleteFile(){
    const { ctx } = this;
    const { id,path,fileName,pwd} = ctx.request.body;
    let retdata = await ctx.service.host.getHostInfoById(id)
    if(retdata&&retdata.length>0){
      const res = await ctx.service.ssh.deleteFile(fileName,path,retdata[0].host_ip,pwd,retdata[0].host_port,retdata[0].host_rootName)
      if(res===200){
        ctx.body = {
          code: '200',
          msg: '删除成功！'
        };
      }else{
        ctx.body = {
          code: '100',
          msg: '删除失败！'
        };
      }
    }else{
      ctx.body = {
        code: '100',
        msg: '主机连接失败'
      };
    }
  }

  async createDir(){
    const { ctx } = this;
    const { id,path,dirName,pwd} = ctx.request.body;
    let retdata = await ctx.service.host.getHostInfoById(id)
    if(retdata&&retdata.length>0){
      const res = await ctx.service.ssh.createDir(dirName,path,retdata[0].host_ip,pwd,retdata[0].host_port,retdata[0].host_rootName)
      if(res===200){
        ctx.body = {
          code: '200',
          msg: '创建成功！'
        };
      }else{
        ctx.body = {
          code: '100',
          msg: '创建失败！'
        };
      }
    }else{
      ctx.body = {
        code: '100',
        msg: '主机连接失败'
      };
    }
  }

  async deleteDir(){
    const { ctx } = this;
    const { id,path,dirName,pwd} = ctx.request.body;
    let retdata = await ctx.service.host.getHostInfoById(id)
    if(retdata&&retdata.length>0){
      const res = await ctx.service.ssh.deleteDir(dirName,path,retdata[0].host_ip,pwd,retdata[0].host_port,retdata[0].host_rootName)
      if(res===200){
        ctx.body = {
          code: '200',
          msg: '删除成功！'
        };
      }else{
        ctx.body = {
          code: '100',
          msg: '删除失败！'
        };
      }
    }else{
      ctx.body = {
        code: '100',
        msg: '主机连接失败'
      };
    }
  }

  async renameFileOrDir(){
    const { ctx } = this;
    const { id,path,odlName,newName,pwd} = ctx.request.body;
    let retdata = await ctx.service.host.getHostInfoById(id)
    if(retdata&&retdata.length>0){
      const res = await ctx.service.ssh.renameFileOrDir(odlName,newName,path,retdata[0].host_ip,pwd,retdata[0].host_port,retdata[0].host_rootName)
      if(res===200){
        ctx.body = {
          code: '200',
          msg: '操作成功！'
        };
      }else{
        ctx.body = {
          code: '100',
          msg: '操作失败！'
        };
      }
    }else{
      ctx.body = {
        code: '100',
        msg: '主机连接失败'
      };
    }
  }
}

module.exports = filesController;