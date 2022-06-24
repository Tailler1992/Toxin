const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV === 'development';
console.log(devMode);

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist"),
  pages: path.join(__dirname, "src/pages")
};

module.exports = {
  mode: devMode ? 'development' : 'production',

  entry: {
    'welcome': `${PATHS.pages}/welcome/welcome.js`,
    'ui-elements': `${PATHS.pages}/ui-elements/ui-elements.js`,
    'ui-colors': `${PATHS.pages}/ui-colors/ui-colors.js`,
    'ui-cards': `${PATHS.pages}/ui-cards/ui-cards.js`,
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },


  resolve: {
    // алиас для упрощения указания пути при импорте в точке входа
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@com': path.resolve(__dirname, 'src/components'),
      '@fm': path.resolve(__dirname, 'src/assets/fonts/montserrat'),
    }
  },

  devServer: {
    static: './dist',
    open: ['welcome.html'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.pages}/welcome/welcome.pug`,
      filename: 'welcome.html',
      chunks: ['welcome'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.pages}/ui-elements/ui-elements.pug`,
      filename: 'ui-elements.html',
      chunks: ['ui-elements'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.pages}/ui-colors/ui-colors.pug`,
      filename: 'ui-colors.html',
      chunks: ['ui-colors'],
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.pages}/ui-cards/ui-cards.pug`,
      filename: 'ui-cards.html',
      chunks: ['ui-cards'],
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
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
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
        exclude: [/fonts/],
      },
      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        },
        exclude: [/components/],
      },
    ],
  },
};
