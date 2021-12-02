var configure = require( "./configure.js" );
module.exports = {
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  // middleware: [ 'jwt' ],
  multipart: {
    mode: 'file',
    fileExtensions: [ // 文件上传白名单
      '.xlsx',
      '.tar',
      '.txt',
      '.doc',
      '.docs',
      '.scss',
      '.sass'
    ],
  },
  key: '123456789abcdefg',
  iv: 'abcdefg123456789',
  mysql: {
    // 单数据库信息配置
    client: {
      // host
      host: configure.host,
      // 端口号
      port: configure.port,
      // 用户名
      user: configure.username,
      // 密码
      password: configure.password,
      // 数据库名
      database: configure.database,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  },
  sequelize: {
    dialect: 'mysql',
    host: configure.host,
    port: configure.port,
    database: configure.database,
    username: configure.username,
    password: configure.password,
    dialectOptions: {
      socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    define: {
      // 使用自定义的表名
      freezeTableName: true,
      // 自动生成时间戳 -小驼峰式
      timestamps: false,
      // 表名小驼峰
      underscored: false,
    },
  },
  jwt: {
    secret: "123456"
  },
  security: {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:8077','http://localhost:3000','http://localhost:9999'],//允许访问接口的白名单
  },
  cors: {
    origin:'*', // 解决跨域问题
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  },
  io: {
    // namespace命名空间配置为/
    namespace: {
      '/scoket': {
        // 预处理器中间件, 我们这里配置了一个auth, 进行权限判断, 它对应的文件是/app/io/middleware/auth.js, 这里可以配置多个文件, 用逗号隔开
        connectionMiddleware: ['auth'], // 这里我们可以做一些权限校验之类的操作 /middleware/auth.js
        packetMiddleware: [], // 通常用于对消息做预处理，又或者是对加密消息的解密等操作
      },
    },
    // 配置redis, 非必须, 不需要的可以不配置这块, egg-socket.io内置了socket-io-redis， 在cluster模式下, 使用redis可以较为简单的实现clients/rooms等信息共享
    // redis: {
    //   host: 'ip地址',
    //   prot: 6379,
    //   auth_pass: 123456,
    //   db:0, 
    // }
  },
  cluster: {
    listen: {
      port: 7001,
      //hostname: '0.0.0.0', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
      // path: '/var/run/egg.sock',
    }
  }
};