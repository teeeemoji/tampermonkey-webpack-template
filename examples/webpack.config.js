var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const packageJson = require('./package.json')

module.exports = {
  entry: ['./index'],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
    publicPath: process.env.NODE_ENV === 'development' ? '/my/cdn/path' : './'
  },
  module: {
    rules: [{test: /\.js$/, use: ['babel-loader']}]
  },
  devServer: {
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      filename: packageJson.name,
      template: '../index.ejs',
      // optional
      scriptName: packageJson.name,
      namespace: packageJson.namespace,
      description: packageJson.description,
      version: packageJson.version,
      include: '/.*\\/github/.*/',
      exclude: '/.*\\/github/.*/',
      match: '/.*\\/github/.*/',
    })
  ]
}
