module.exports = () => {
  return async (ctx, next) => {
    const token = ctx.socket.handshake.query.token
    if(token){
      try {
        ctx.app.jwt.verify(token, ctx.app.config.jwt.secret); // 验证token 
        await next();
      } catch (error) {
        ctx.socket.emit('error-token', "token已过期，请重新登录")
        ctx.socket.disconnect();
      }
    }else{
      ctx.socket.emit('error-token', "token不存在")
      ctx.socket.disconnect();
    }
  };
};