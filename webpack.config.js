var path = require('path');
var webpack = require('webpack');

module.exports = {
 entry: './Main.jsx',
 output: { path: __dirname, filename: 'bundle.js' },
 module: {
   loaders: [
     {
       test: /.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query: {
         presets: ['es2015', 'react']
       }
     },
     {
       test: /\.css$/,
       loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
       exclude: /node_modules/
     }
   ]
 },
};
