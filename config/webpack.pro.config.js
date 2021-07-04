const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWbpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge');
const pro = require('./webpack.comm.config.js')
module.exports = merge(pro,{
    mode: 'production',
    output: {
        filename: '[name].[hash:8].js',
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
    ]
})