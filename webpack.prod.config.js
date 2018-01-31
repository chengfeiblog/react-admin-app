const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const baseConfig = require('./webpack.base.config.js')

const publicUrl = 'localhost:8080'

const prodConfig = {
  devtool: 'source-map',
  output: {
    // 采用相对路径编译，增加环境兼容性
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../../',
          use: [
            ({ resource }) => ({
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: /\.module/.test(resource),
                localIdentName: '[name]__[local]__[hash:base64:5]',
                minimize: true,
                sourceMap: true,
              },
            }),
            'postcss-loader', // 自动补后缀
            {
              loader: require.resolve('less-loader'),
              options: {
                // modifyVars: { '@primary-color': '#001529' },
              },
            },
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
        PUBLIC_URL: publicUrl,
      },
    }),
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash:7].css',
      allChunks: true,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    // new SWPrecacheWebpackPlugin({
    //   dontCacheBustUrlsMatching: /\.\w{8}\./,
    //   filename: 'service-worker.js',
    //   logger (message) {
    //     if (message.indexOf('Total precache size is') === 0) {
    //       return
    //     }
    //     if (message.indexOf('Skipping static resource') === 0) {
    //       return
    //     }
    //     console.log(message)
    //   },
    //   minify: true,
    //   navigateFallback: `${publicUrl}/index.html`,
    //   navigateFallbackWhitelist: [/^(?!\/__).*/],
    //   staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    // }),
  ],
}

module.exports = merge(baseConfig, prodConfig)
