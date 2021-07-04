const { merge } = require('webpack-merge');

const dev = require('./webpack.comm.config.js')
module.exports = merge(dev,{
    mode:'development',
    devtool: "source-map",
    devServer:{
        open:true,
        progress:true,
        contentBase:'./public'   //自定义根目录
        // proxy:{
        //   '/api':{
        //     target:'http://localhost:8888',
        //     pathRewrite:{
        //       '^/api':''
        //     },
        //     secure:false,
        //     changeOrigin:true
        //   }
        // }
      }
})