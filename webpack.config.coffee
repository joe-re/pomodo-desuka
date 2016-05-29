path = require 'path'
webpack = require 'webpack'
cwd = process.cwd()

module.exports =
  entry:
    'main/index': './src/main/index.js'
    'renderer/index': './src/renderer/index.js'
  target: 'node'
  node:
    __dirname: false
    __filename: false
  output:
    filename: 'dist/[name].js'
  module:
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [
          /node_modules/
        ]
      }
      {
        test: /\.scss$/
        loaders: ['style', 'css', 'sass']
      }
    ]
  resolve:
    extensions: ['', '.js', '.react.js']
    root: [
      path.resolve(cwd)
      path.join(cwd, './src'),
      path.join(cwd, './node_modules')
    ]
  cache: true
  devtool: 'source-map'
  plugins: [
    new webpack.ExternalsPlugin 'commonjs', ['electron']
  ]
