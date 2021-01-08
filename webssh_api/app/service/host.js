const Service = require('egg').Service;
const crypto = require('crypto');

class HostService extends Service {

  async getHostInfoById(id){
    const info = await this.app.mysql.select('t_host',{where:{host_id:id}})
    const data = JSON.parse(JSON.stringify(info))
    return data
  }

  async createHost(obj) {
    const row = {
      host_name: obj.hostName,
      host_ip: obj.ip,
      host_port: obj.port,
      host_merchants: obj.merchants,
      host_configure: obj.configure,
      host_remarks: obj.remarks,
      host_rootName: obj.rootName
    };
    const data = await this.app.mysql.insert('t_host',row);
    return data;
  }

  async getHostList(obj) {
    const data = await this.app.mysql.query(`select * from t_host where (host_name like '%${obj.hostName}%') and (host_ip like '%${obj.hostIP}%')`);
    return data;
  }

  async deleteHost(id){
    const data = await this.app.mysql.delete('t_host', {
      host_id: id
    })
    return data;
  }

  async updateHost(obj){
    const row = {
      host_name: obj.hostName,
      host_ip: obj.ip,
      host_port: obj.port,
      host_merchants: obj.merchants,
      host_configure: obj.configure,
      host_remarks: obj.remarks,
      host_rootName: obj.rootName
    };
    const options = {
      where: {
        host_id: obj.id
      }
    };
    const data = await this.app.mysql.update('t_host',row,options)
    return data;
  }
}

module.exports = HostService;