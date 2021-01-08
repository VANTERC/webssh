const Controller = require('egg').Controller;

class HostController extends Controller {

  async getHostInfoById() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    let res = await ctx.service.host.getHostInfoById(id)
    let retdata = {}
    if(res.length>0){
      retdata = {
        hostName: res[0].host_name,
        ip: res[0].host_ip,
        port: res[0].host_port,
        rootName: res[0].host_rootName
      }
      ctx.body = {
        code: '200',
        data: retdata,
        msg: '查询成功！'
      };
    }else{
      ctx.body = {
        code: '100',
        msg: '未查询到主机信息'
      };
    }
  }

  async createHost() {
    const { ctx } = this;
    const obj = ctx.request.body;
    const res = await ctx.service.host.createHost(obj);
    if(res.affectedRows === 1){
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
    
  }

  async getHostList() {
    const { ctx } = this;
    const obj = ctx.request.body;
    const res = await ctx.service.host.getHostList(obj);
    let retList = []
    res.map(r=>{
      retList.push({
        id:r.host_id,
        merchants: r.host_merchants,
        hostName: r.host_name,
        hostIp: r.host_ip,
        port: r.host_port,
        rootName: r.host_rootName,
        configure: r.host_configure,
        remarks: r.host_remarks
      })
    })
    ctx.body = {
      code: '200',
      data: retList,
      msg: '查询成功！'
    };
  }

  async deleteHost(){
    const { ctx } = this;
    const { id } = ctx.request.body;
    const res = await ctx.service.host.deleteHost(id);
    if(res.affectedRows === 1){
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
  }

  async updateHost(){
    const { ctx } = this;
    const obj = ctx.request.body;
    const res = await ctx.service.host.updateHost(obj);
    if(res.affectedRows === 1){
      ctx.body = {
        code: '200',
        msg: '编辑成功！'
      };
    }else{
      ctx.body = {
        code: '100',
        msg: '编辑失败！'
      };
    }
  }
}

module.exports = HostController;