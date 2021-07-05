const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        index:path.join(__dirname, '../src/index.js'),
        other:path.join(__dirname, '../src/other.js'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
            filename:'index.html',
            chunks:['index','vendor','common'],
            title: "webpack_study"
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/other.html'),
            filename:'other.html',
            chunks:['other','common'],
            title: "webpack_study"
        }),
        new MiniCssExtractPlugin({
            filename:'css/main[hash:8].css'
        })
    ],
}