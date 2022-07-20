const path = require('path');
const multipage = require('./multipage.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const result = {};

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  pages: path.join(__dirname, "../src/pages")
};

const devMode = process.env.NODE_ENV === 'development';

const htmlPlugins = multipage.pages.map(page => {
  return new HtmlWebpackPlugin(page);
});

result.plugins = [
  ...htmlPlugins,
  new FaviconsWebpackPlugin({
    logo: `${PATHS.src}/assets/favicon/icon.svg`,
    prefix: 'assets/favicons/',
  }),
  new MiniCssExtractPlugin({
    filename: "assets/css/[name].css",
  })
];

result.module = {
  rules: [
    {
      test: /\.html$/i,
      use: ["html-loader"]
    },
    {
      test: /\.pug$/i,
      use: ['pug-loader']
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
        "sass-loader",
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/img/[name][ext]'
      },
      exclude: [/fonts/],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/fonts/[name][ext]'
      },
      exclude: [/components/],
    },
  ],
};

module.exports = result;
