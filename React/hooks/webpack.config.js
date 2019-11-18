const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        open: true
    },
    module: {
        rules: [{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}
