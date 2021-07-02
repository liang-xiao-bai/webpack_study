let path = require('path')
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'src/index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          },
          {
            test: /\.less$/,
            use: ['style-loader','css-loader','less-loader']
          },
          {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
          },
          {
            test:/\.js$/,
            use:['babel-loader']
          }
        ]
      }
}