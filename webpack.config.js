/* 
 * @Author: shunjinchan
 * @Date:   2015-12-25 11:21:31
 * @Last Modified by:   shunjinchan
 * @Last Modified time: 2015-12-27 16:44:22
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './public/src/main.js', // 入口文件
    output: {
        path: './public/assets/',
        publicPath: '/public/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ];
} else {
    module.exports.devtool = '#source-map';
}
