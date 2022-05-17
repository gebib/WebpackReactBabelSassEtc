const path = require('path');
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (env, argv) => {
    const DEV_ENV = (argv.mode === "development") ? "development" : "production";
    console.log("/////////////////::building in ", DEV_ENV, " mode!");
    return merge(commonConfig(env, argv), {
        mode: DEV_ENV,
        entry: './src/index.js',

        output: {
            path: path.join(__dirname, '../../dist'),
            filename: 'bundle.[hash].js'
        },

    });
};