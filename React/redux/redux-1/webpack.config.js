const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: '3000',
        open: true
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}