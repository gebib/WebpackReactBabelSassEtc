
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    // const DEV_ENV = (argv.mode === "development") ? "development" : "production";
    // console.log("/////////////////: ", DEV_ENV);
    return {
        plugins: [
            new HTMLWebpackPlugin({
                template: './src/template.html', //as if it runs from the root!
            })
        ],

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },

                {
                    test: /\.(css|scss|sass)$/,
                    use: ["style-loader", "css-loader", "sass-loader"] //order does matter!
                }
            ]
        }
    }
}