const initialConfig = require('./webpack.config');
const merge = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const configProd = merge(initialConfig, {
  optimization: {
    minimizer:
      [new OptimizeCssAssetsWebpackPlugin(),
      new TerserPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});

module.exports = configProd;