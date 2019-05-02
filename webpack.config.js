const path = require('path');

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
    historyApiFallback: true,
    // contentBase: './'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader', 
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /scss$/,
      exclude: /node_modules/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    // { 
    //   test: /\.(gif|png|jpe?g|svg)$/i,
    //   use: 
    //     [
    //     'file-loader',
    //       {
    //         loader: 'image-webpack-loader',
    //         options: {
    //         bypassOnDebug: true, // webpack@1.x
    //         disable: true, // webpack@2.x and newer
    //         },
    //       },
    //     ],
    //   loader: 'url-loader?limit=8192' 
    // }
  ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};