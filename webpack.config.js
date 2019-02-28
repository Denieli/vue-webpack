const path=require('path')
const webpack=require('webpack')//第2步
const htmlWebpackPlugin=require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  
    entry : path.join(__dirname,'./src/js/main.js'),
    output: {
        path:path.join(__dirname,'./dist'), 
        filename:'bundle.js'
    },
    devServer:{
        open: true,
        port: 8080,
        contentBase:'src',
        host:'192.168.2.134',
        hot:true//第一步
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//第3步
        new htmlWebpackPlugin({
           template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/,use:['style-loader','css-loader'] },
            { test: /\.vue$/,use:['vue-loader'] },
            {test:/\js$/,use:'babel-loader',exclude:/node_module/},
            {test: /\.(ttf|eot|svg|woff|woff2)$/,use: 'url-loader'},
            {test: /\.scss$/,use: ['style-loader' ,'css-loader' ,'sass-loader']}
        ]
    }
}

