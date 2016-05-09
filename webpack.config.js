var webpack = require('webpack');

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
      { test: /\.json$/, loader: "json-loader" }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
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
    new webpack.HotModuleReplacementPlugin()
  ]
};
