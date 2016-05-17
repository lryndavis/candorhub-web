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
        loaders: ['style-loader', 'css-loader', 'style',
				'css?importLoaders=1',
				'font?format[]=truetype&format[]=woff&format[]=embedded-opentype']
      },
      { test: /\.json$/, loader: "json-loader" }
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
