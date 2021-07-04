const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWbpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge');
const pro = require('./webpack.comm.config.js')
module.exports = merge(pro,{
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWbpackPlugin({
            patterns: [
                {
                    from: './public',
                    to: './',
                    globOptions: {
                        ignore: [
                            '**/index.html'
                        ]
                    }
                }
            ]
        })
    ]
})