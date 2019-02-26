'use strict'

const path = require('path')

module.exports = {
  dev: {
    //开发环境配置
    assetsSubDirectory: 'static',//静态资源位置
    assetsPublicPath: '/',
    proxyTable: {},
    host: '127.0.0.1',
    port: 8080,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    // 打包线上配置
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: false,//因为其他插件已经帮忙做了压缩，没必要继续亚
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
