// 配置项见https://cli.vuejs.org/zh/config/
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, dir);
}

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  // 部署应用时的基本 URL
  publicPath: '/webssh/',
  // build时构建/文件的目录 构建时传入 --no-clean 可关闭该行为
  outputDir: 'dist',
  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // Babel 显式转译列表
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: { // 用来设置值主题颜色 见https://www.antdv.com/docs/vue/customize-theme-cn
            'primary-color': '#026a40',
            'link-color': '#026a40',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    }
  },
  crossorigin: '',
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
  // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
  configureWebpack: {
    // 设置性能提示
    performance: {
      hints: 'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
    // 生产环境去除日志
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: process.env.NODE_ENV === 'production',
              drop_debugger: process.env.NODE_ENV === 'production'
            }
          }
        })
      ]
    },
    devtool:
      process.env.NODE_ENV === 'production' ? 'souce-map' : 'inline-source-map'
  },
  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title= 'webssh';
      return args;
    });
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'));

    // if (process.env.NODE_ENV === 'production') {
    //   // 启用gzip压缩 需要nginx配置
    //   config.plugin('compressionPlugin').use(
    //     new CompressionPlugin({
    //       filename: '[path].gz[query]',
    //       algorithm: 'gzip',
    //       test: productionGzipExtensions, // 处理所有匹配此 {RegExp} 的资源
    //       threshold: 10240, // 只处理比这个值大的资源。按字节计算
    //       minRatio: 0.8, // 只有压缩率比这个值小的资源才会被处理
    //       deleteOriginalAssets: true // 是否删除原资源
    //     })
    //   );
    // }
  },
  // 所有 webpack-dev-server 的选项都支持 https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8077,
    hot: true,
    open: true,
    compress: true
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: false,
  // 向 PWA 插件传递选项
  pwa: {},
  // 可以用来传递任何第三方插件选项
  pluginOptions: {}
};
