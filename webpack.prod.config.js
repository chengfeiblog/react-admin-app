const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.base.config.js')

const prodConfig = {
  devtool: 'cheap-module-source-map',
  output: {
    // 采用相对路径编译，增加环境兼容性
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: path.resolve(__dirname, './node_modules'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[local]-[hash:base64:5]&minimize=true',
            'postcss-loader', // 自动补后缀
            'less-loader',
          ],
        }),
      },
      {
        test: /\.(css|less)$/,
        include: path.resolve(__dirname, './node_modules'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize=true',
            'postcss-loader', // 自动补后缀
            'less-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    /** 压缩 loaders */
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new CleanWebpackPlugin(['dist']),
    /** 指定环境 */
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash:7].css',
      allChunks: true,
    }),
  ],
}

module.exports = merge(baseConfig, prodConfig)
