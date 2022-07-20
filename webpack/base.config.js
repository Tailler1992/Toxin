const path = require('path');
const multipage = require('./multipage.config');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: {
    ...multipage.entry
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    static: '../dist',
    open: ['welcome.html'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@com': path.resolve(__dirname, '../src/components'),
      '@fm': path.resolve(__dirname, '../src/assets/fonts/montserrat'),
    }
  },
};
