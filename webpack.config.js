const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Html = new HtmlWebpackPlugin({
  template:path.join(__dirname,'src/index.html')
})
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
            use:['babel-loader'],
            exclude: /node_modules/
          }
        ]
    },
    plugins: [ Html ],
    devServer:{
      open:true,
      progress:true,
      // contentBase:path.join(__dirname,'src')  //自定义根目录
    }
}