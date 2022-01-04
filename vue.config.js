const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 打包时去除打印信息
const UglifyPlugin = require('uglifyjs-webpack-plugin')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']

module.exports = {
  parallel: false,
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: !isProduction,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_api', resolve('src/api'))
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
  },
  configureWebpack: (config) => { //  打包优化-开启gzip,删除console,使用CDN
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), //  匹配文件名
          threshold: 10240, //  10kb以上文件压缩
          minRatio: 0.8
        }),
        new UglifyPlugin({
          uglifyOptions: {
            output: {
              // 删除注释
              comments: false
            },
            warnings: false,
            compress: {
              drop_console: false, // 保留console
              drop_debugger: true, // 删除debugger
              pure_funcs: ['console.log'] // 移除console
            }
          }
        })
      )
    } else {
      config.devtool = 'source-map'
    }
    // 使用外部cdn
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      // echarts: 'echarts',
      // 'element-ui': 'ELEMENT',
      vant: 'vant'
    }
  }
}
