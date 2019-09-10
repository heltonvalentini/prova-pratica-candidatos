var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

const PROFILE = process.env.PROFILE || 'local';
const API_URL = process.env.API_URL || 'teste-back/services/teste';
const STORAGE_URL = process.env.STORAGE_URL || 'teste/files';
const DEFAULT_HOST = process.env.DEFAULT_HOST || 'localhost';
const DEFAULT_PORT = process.env.DEFAULT_PORT || '8084';
const DEFAULT_API_HOST = process.env.DEFAULT_API_HOST || DEFAULT_HOST;
const DEFAULT_API_PORT = process.env.DEFAULT_API_PORT || DEFAULT_PORT;
const DEFAULT_STORAGE_HOST = process.env.DEFAULT_STORAGE_HOST || DEFAULT_HOST;
const DEFAULT_STORAGE_PORT = process.env.DEFAULT_STORAGE_PORT || DEFAULT_PORT;

var buildConfigs = {
  local: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          "API_HOST": JSON.stringify(DEFAULT_API_HOST),
          "API_PORT": JSON.stringify(DEFAULT_API_PORT),
          "API_URL": JSON.stringify(API_URL),
          "STORAGE_HOST": JSON.stringify(DEFAULT_STORAGE_HOST),
          "STORAGE_PORT": JSON.stringify(DEFAULT_STORAGE_PORT),
          "STORAGE_URL": JSON.stringify(STORAGE_URL),
        }
      })
    ]
  },
  dev: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          "API_HOST": JSON.stringify(DEFAULT_API_HOST),
          "API_PORT": JSON.stringify(DEFAULT_API_PORT),
          "API_URL": JSON.stringify(API_URL),
          "STORAGE_HOST": JSON.stringify(DEFAULT_STORAGE_HOST),
          "STORAGE_PORT": JSON.stringify(DEFAULT_STORAGE_PORT),
          "STORAGE_URL": JSON.stringify(STORAGE_URL),
        }
      })
    ]
  },
  qa: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          "API_HOST": JSON.stringify(DEFAULT_API_HOST),
          "API_PORT": JSON.stringify(DEFAULT_API_PORT),
          "API_URL": JSON.stringify(API_URL),
          "STORAGE_HOST": JSON.stringify(DEFAULT_STORAGE_HOST),
          "STORAGE_PORT": JSON.stringify(DEFAULT_STORAGE_PORT),
          "STORAGE_URL": JSON.stringify(STORAGE_URL),
        }
      })
    ]
  },
  hmg: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          "API_HOST": JSON.stringify(DEFAULT_API_HOST),
          "API_PORT": JSON.stringify(DEFAULT_API_PORT),
          "API_URL": JSON.stringify(API_URL),
          "STORAGE_HOST": JSON.stringify(DEFAULT_STORAGE_HOST),
          "STORAGE_PORT": JSON.stringify(DEFAULT_STORAGE_PORT),
          "STORAGE_URL": JSON.stringify(STORAGE_URL),
        }
      })
    ]
  },
  prd: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          "API_HOST": JSON.stringify(DEFAULT_API_HOST),
          "API_PORT": JSON.stringify(DEFAULT_API_PORT),
          "API_URL": JSON.stringify(API_URL),
          "STORAGE_HOST": JSON.stringify(DEFAULT_STORAGE_HOST),
          "STORAGE_PORT": JSON.stringify(DEFAULT_STORAGE_PORT),
          "STORAGE_URL": JSON.stringify(STORAGE_URL),
        }
      }),
      new webpackUglifyJsPlugin({
        cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
        debug: true,
        minimize: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compressor: {
          warnings: false
        }
      })
    ]
  }
}
var webpackConfig = {

  entry: {
    'main': './src/main.browser.ts',
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
        path.resolve(__dirname, './src'),
        {}
        ),
    new CopyWebpackPlugin([
        { from: './src/assets', to: 'assets' },
        { from: './src/index.html' },
    ])
  ],

  module: {
    loaders: [
    {
      test: /\.ts$/,
      loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader',
        'angular2-router-loader'
      ]
    },
    {
      test: /\.css$/,
      loaders: ['to-string-loader', 'css-loader']
    },
    {
      test: /\.html$/,
      loader: 'raw-loader'
    },
    { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
    ]
  },

};


var defaultConfig = {
  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 1000},
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization, X-Auth-Token"
    }
  },

  node: {
    global: true,
    crypto: 'empty',
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    clearImmediate: false,
    setImmediate: false
  }
};
module.exports = webpackMerge(defaultConfig, webpackConfig, buildConfigs[PROFILE]);
