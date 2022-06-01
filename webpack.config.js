const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {    
    mode: 'production',
    entry: './src/pages/ui-elements/ui-elements.js',
    output: {
        filename: 'ui-elements.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/ui-elements/ui-elements.pug',
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css",
        })
    ],

    module: {
        rules: [
            // html
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            // PUG
            {
                test: /\.pug$/i,
                use: ['pug-loader']
            },
            // CSS/SASS/SCSS
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            // img
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]'
                },
            },
            // fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                },
            },
        ],
    },
};