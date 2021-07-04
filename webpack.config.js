const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWbpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode:'development',
    entry:path.join(__dirname,'src/index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'js/bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader','css-loader','postcss-loader']
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
          },
          {
            test:/\.(jpg|png)$/,
            use:{
              loader:'url-loader',
              options:{
                name:'img/[name]_[hash:8].[ext]',
                limit:100*1024
              }
            }
          }
        ]
    },
    plugins: [ 
      new HtmlWebpackPlugin({
        template: path.join(__dirname,'./public/index.html'),
        title: "webpack_study"
      }),
      new CleanWebpackPlugin(),
      new DefinePlugin({
        BASE_URL: "'./'"
      }),
      new CopyWbpackPlugin({
        patterns:[
          {
            from:'./public',
            to:'./',
            globOptions:{
              ignore:[
                '**/index.html'
              ]
            }
          }
        ]
      })
     ],
    devServer:{
      open:true,
      progress:true,
      // contentBase:path.join(__dirname,'src')  //自定义根目录
      proxy:{
        '/api':{
          target:'http://localhost:8888',
          pathRewrite:{
            '^/api':''
          },
          secure:false,
          changeOrigin:true
        }
      }
    }
}