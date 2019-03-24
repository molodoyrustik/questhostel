var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

var BUILD_DIR = path.resolve(__dirname, './build');
var DEV_DIR = path.resolve(__dirname, './src');

var cssFilename = process.env.NODE_ENV === 'production' ? 'bundle.[hash].css' : 'bundle.css';
var jsFilename = process.env.NODE_ENV === 'production' ? 'bundle.[hash].js' : 'bundle.js';

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new ExtractTextPlugin(cssFilename)
];

if(process.env.NODE_ENV === 'production'){
  plugins.push(new CleanWebpackPlugin([
    BUILD_DIR + '/static/*.css',
    BUILD_DIR + '/static/*.js',
    BUILD_DIR + '/static/manifest.json',
    BUILD_DIR + '/manifest.json',
    BUILD_DIR + '/static/fonts',
    path.join(DEV_DIR, '../manifest.json')
  ], {
    root: path.join(__dirname,'../'),
    verbose: true,
    dry: false
  }));
  //plugins.push(new webpack.optimize.AggressiveMergingPlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    comments: false
  }));
  plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }));
  plugins.push(new ManifestPlugin({
    fileName: '../src/manifest.json'
  }));
}

var config = {
  entry: [
    DEV_DIR + '/client.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: jsFilename,
  },
  plugins,
  resolve: {
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader" },
            { loader: "less-loader" },
          ],
          fallback: "style-loader"
        })
      },
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        loaders: process.env.NODE_ENV !== 'production' ? ['babel-loader'] : [ 'babel-loader' ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|gif)$/,
        loader: process.env.NODE_ENV !== 'production' ? 'file-loader?name=[name].[ext]' : 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    contentBase: './build',
    publicPath: '/build/'
  }
}

module.exports = config;
