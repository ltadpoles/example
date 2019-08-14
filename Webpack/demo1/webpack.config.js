const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 1.指定入口文件
    entry: path.resolve(__dirname, './src/main.js'),
    // 2.指定出口文件
    // 3.在package.json中的script中添加命令
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        // 指定端口号
        port: '3000',
        // 是否打开浏览器
        open: true,
        // 启用热更新
        hot: true
    },
    module: {
        // webpack 自身只能处理 js 资源

        // loader执行也有顺序 从右到左
        rules: [
            // 处理css
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            // 处理 sass
            {test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            // 处理图片
            {test: /\.(png|jpg|jpeg|gif|bmp)$/, use: 'url-loader'},
            // 处理字体
            {test: /\.(svg|eot|ttf|woff|woff2)$/, use: 'file-loader'}
        ]
    },
    plugins: [
        // 自动生成 html 页面
        new HtmlWebpackPlugin({template: path.join(__dirname, './index.html')}),
        // 热更新插件
        new webpack.HotModuleReplacementPlugin
    ]
}