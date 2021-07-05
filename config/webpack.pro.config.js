const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWbpackPlugin = require('copy-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge');
const pro = require('./webpack.comm.config.js')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = merge(pro,{
    mode: 'production',
    output: {
        filename: 'js/[name].[hash:8].js',
        path: path.join(__dirname, '..', 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWbpackPlugin({
            patterns: [
                {
                    from: './public',
                    to: './',
                    globOptions: {
                        ignore: [
                            '**/index.html',
                            '**/other.html'
                        ]
                    }
                }
            ]
        })
    ],
    optimization:{
        // 压缩css
        minimizer:[ new TerserWebpackPlugin(), new OptimizeCssAssetsPlugin()],
        splitChunks:{
            chunks:'all',
            cacheGroups:{
                // 第三方模块
                vendor:{
                    name:'vendor',
                    priority:1,
                    test:/node_module/,
                    minSize:0,
                    minChunks:1
                },
                // 公共模块
                common:{
                    name:'common',
                    priority:0,
                    minSize:0,
                    minChunks:2
                }
            }
        }
    }
})