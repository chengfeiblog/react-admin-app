const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const assetsPath = path.join(__dirname, './dist')

const baseConfig = {
  /** 入口 */

  entry: {
    app: ['babel-polyfill', path.join(__dirname, 'src/index.js')],
    vendor: [
      'axios',
      'react',
      'react-router-dom',
      'redux',
      'react-dom',
      'react-redux',
    ],
  },
  output: {
    path: assetsPath,
    filename: 'static/js/[name].[chunkhash:7].js',
    chunkFilename: 'static/js/[name].[chunkhash:7].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // 10k以下的图片转base64
              name: 'static/img/[name].[hash:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '/public'),
        to: assetsPath,
        force: true,
      },
    ]),
    /** */
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),

    /** runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑 */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
  ],

  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@': `${__dirname}/src`,
      assets: path.join(__dirname, 'src/assets'),
      pages: path.join(__dirname, 'src/pages'),
      components: path.join(__dirname, 'src/components'),
      routers: path.join(__dirname, 'src/routers'),
      store: path.join(__dirname, 'src/store'),
      themes: `${__dirname}/src/themes`,
      utils: `${__dirname}/src/utils`,
    },
  },
}

module.exports = baseConfig
