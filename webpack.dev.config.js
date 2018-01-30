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
    filename: 'static/js/[name].[hash:7].js',
  },
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: [
          'style-loader',
          ({ resource }) => ({
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: /\.module/.test(resource),
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          }),
          'postcss-loader',
          {
            loader: require.resolve('less-loader'),
            options: {
              // modifyVars: { '@primary-color': '#001529' },
            },
          },
        ],
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
