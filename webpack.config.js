var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },
    {
       test: /\.scss$/,
       loaders: ['style-loader', 'css-loader', 'sass-loader']
     },
     {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      { test: /\.json$/, loader: "json-loader" },
      {
        test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        loader: 'imports?define=>false&this=>window'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
       loader: 'file?name=stylesheets/fonts/Coves-Light/[name].[ext]'
     },
     {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'url?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
      "material-ui": path.resolve('./node_modules/material-ui')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
