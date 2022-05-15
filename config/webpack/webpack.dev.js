const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    mode: "development",
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '../../dist'),
        filename: 'bundle.js'
    },
}

module.exports = merge(commonConfig, devConfig);