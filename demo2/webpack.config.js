const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')  // vue-loader 5.x之后必须引入的插件

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: '8088',
        open: true
    },
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'], exclude: /node-modules/},
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /\.(jpg|png|gif|jpeg|bmp)$/, use: 'url-loader'},
            { test: /\.(svg|eot|ttf|woff|woff2)$/, use: 'file-loader' }
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        }),
        new VueLoaderPlugin()
    ]
}