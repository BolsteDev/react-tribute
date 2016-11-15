const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './example/example.js',
  devServer: {
    hot: true,
    host: 'localhost',
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  resolve: {
    fallback: path.join(__dirname, 'example'),
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'example'),
    filename: 'index.js',
    publicPath: '/',
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    }],
  },
  plugins: [],
};
