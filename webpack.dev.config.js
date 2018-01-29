const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js'),
    ],
  },
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: path.resolve(__dirname, './node_modules'),
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]-[hash:base64:5]',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(css|less)$/,
        include: path.resolve(__dirname, './node_modules'),
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, ''),
    historyApiFallback: true,
    // 服务器外部可以访问
    host: '127.0.0.1',
    proxy: {
      // "/api": "http://localhost:3000"
    },
  },
}

module.exports = merge({
  customizeArray (a, b, key) {
    /** entry.app不合并，全替换 */
    if (key === 'entry.app') {
      return b
    }
    return undefined
  },
})(baseConfig, devConfig)
