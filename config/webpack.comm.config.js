const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
module.exports = {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'img/[name]_[hash:8].[ext]',
                        limit: 100 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            BASE_URL: "'./'"
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            title: "webpack_study"
        }),
    ],
}