const Service = require('egg').Service;
const { Client } = require('ssh2');
let utf8 = require("utf8");

class XtermService extends Service {
  // 创建socket
  async create(socket,ip,password,port,username,cols,rows) {
    const conn = new Client();
      conn.on('ready', () => {
        socket.emit('shell-output', "\r\n***" + ip + " SSH CONNECTION ESTABLISHED ***\r\n")
        conn.shell({
          cols: cols,
          rows: rows
        },function (err, stream) {
          if (err) {
              return socket.emit(
                'shell-output',
                  "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
              );
          }
          socket.on('resize', function socketOnResize (data) {
            stream.setWindow(data.rows, data.cols)
          })
          socket.on('shell-input', function (data) {
              stream.write(JSON.parse(data).data);
          });
          stream
              .on("data", function (d) {
                  socket.emit('shell-output', utf8.decode(d.toString("binary")));
              })
              .on("close", function () {
                conn.end();
              });
        });
      }).on('error', (err) => {
        socket.emit('shell-output', "\r\n***密码验证错误，请检查密码***\r\n");
        conn.end();
      }).connect({
        host: ip,
        port: port,
        username: username,
        password: password
      });
  }
}

module.exports = XtermService;