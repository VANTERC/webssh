module.exports = app => {
  const { router, controller, middleware ,io} = app;
  const jwtErr = middleware.jwtErr(app.config.jwt)
  
  router.get('/api/getUser', jwtErr, controller.user.getUser);
  router.post('/api/updateUserInfo', jwtErr, controller.user.updateUserInfo);
  router.post('/api/login', controller.login.login);
  io.of('/scoket').route('api/scoket', io.controller.xterm.create);
  router.post('/api/host_service/getHostInfoById',jwtErr, controller.host.getHostInfoById);
  router.post('/api/host_service/createHost',jwtErr, controller.host.createHost);
  router.post('/api/host_service/getHostList',jwtErr, controller.host.getHostList);
  router.post('/api/host_service/deleteHost',jwtErr, controller.host.deleteHost);
  router.post('/api/host_service/updateHost',jwtErr, controller.host.updateHost);
  router.post('/api/host_service/files/readFiles',jwtErr, controller.files.readFiles);
  router.post('/api/host_service/files/uploadFile',jwtErr, controller.files.uploadFile);
  router.post('/api/host_service/files/downloadFile',jwtErr, controller.files.downloadFile);
  router.post('/api/host_service/files/deleteFile',jwtErr, controller.files.deleteFile);
  router.post('/api/host_service/files/createDir',jwtErr, controller.files.createDir);
  router.post('/api/host_service/files/deleteDir',jwtErr, controller.files.deleteDir);
  router.post('/api/host_service/files/renameFileOrDir',jwtErr, controller.files.renameFileOrDir);

  router.post('/api/ssh_service/sshverification',jwtErr, controller.ssh.SSHVerification); // 验证服务器是否链接成功接口
};