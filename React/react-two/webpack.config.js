const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            { test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        port: '8081',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}