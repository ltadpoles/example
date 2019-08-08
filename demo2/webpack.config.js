const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')  // vue-loader 5.x之后必须引入的插件

module.exports = {
    entry: {
        // 项目代码入口
        app: path.resolve(__dirname, './src/main.js')
    },
    
    output: {
        path: path.resolve(__dirname, './dist'),
        // 指定分离出来包的名称
        filename: 'js/[name].js'
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
            { test: /\.(jpg|png|gif|jpeg|bmp)$/, use: [{
                loader: 'url-loader',
                options: {
                    // 限制图片大小 10240 表示10kb
                    limit: 10240,
                    name: 'images/img-[hash:5].[ext]'
                }
            }]},
            { test: /\.(svg|eot|ttf|woff|woff2)$/, use: [{
                loader: 'file-loader',
                options: {
                    name: 'font/[hash:7].[ext]'
                }
            }] }
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
    ],
    optimization:{    //优化
        splitChunks:{
            cacheGroups:{//缓存组，一个对象。它的作用在于，可以对不同的文件做不同的处理
                commonjs:{
                    name:'vender',        //输出的名字（提出来的第三方库）
                    test: /\.js/,        //通过条件找到要提取的文件
                    chunks:'initial'    //只对入口文件进行处理
                }
            }
        }
    }
}