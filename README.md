<h1 align="center">webssh</h1>

<div align="center">

一款基于vue+egg的web终端管理器，可实现基本的Linux服务器常规操作。

</div>

## 演示环境

演示地址：https://vanterc.github.io/webssh/
```
演示账号: admin/admin
* 请不要随意修改账号密码
```
![demo1](https://github.com/VANTERC/webssh/blob/main/webssh1.png)
![demo2](https://github.com/VANTERC/webssh/blob/main/webssh2.png)
## 环境

* Vue 2.6.11
* Ant Design Vue 1.6.4+
* Node 12.16
* Egg 2.27
* Mysql 5.7+

## 特性

- **基于Node**: 基于JS开发，前后端分离，前端容易上手
- **在线终端**: 主机支持浏览器在线终端登录
- **文件管理**: 主机文件在线上传下载、创建文件夹、支持重命名
- **安全管理**: 只保存服务器信息，不在任何地方保存服务器密码

## 本地运行
1. 准备好你的mysql数据库(新建一个Utf8字符集,名称为webssh的数据库,无需创建表，系统会自动创建)

2. 在webssh_api/config/configure.js 下配置您的数据库
```
{
  // 数据库地址
  host:'172.0.0.1',
  // 数据库端口
  port: 3306,
  // 数据库名称
  database:'webssh',
  // 账号
  username: 'root',
  // 密码
  password:'password'
}
```
3. 进入webssh_api目录 运行服务端
```
npm install
npm run start
```
4. 进入webssh_web目录 运行客户端
```
npm install
npm run serve
```

## License & Copyright
[AGPL-3.0](https://opensource.org/licenses/AGPL-3.0)