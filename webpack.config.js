const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const template = require('html-webpack-template')

const {HotModuleReplacementPlugin} = webpack

const OUTPUT_PATH = path.resolve('./build')

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: OUTPUT_PATH
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: [path.resolve('./node_modules')]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    port: process.env.PORT || 3030,
    host: process.env.HOST || '0.0.0.0',
    stats: 'errors-only',
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: OUTPUT_PATH,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'Missing CSS file and jest',
      appMountId: 'root',
      template
    })
  ]
}
