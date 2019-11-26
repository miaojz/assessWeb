const webpack = require('webpack')
module.exports = {
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: "dist",
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    devServer: {
        proxy: {
          // proxy all requests starting with /api to jsonplaceholder
          '/api': {
            target: 'http://192.168.0.6:8182/',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
};