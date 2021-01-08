module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
 
  const Host = app.model.define("t_host", {
    host_id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    host_name: STRING(255),
    host_ip: STRING(255),
    host_port: STRING(255),
    host_merchants: STRING(255),
    host_configure: STRING(255),
    host_remarks: STRING(255),
    host_rootName: STRING(255)
  });
 
  return Host;
};