var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
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
			loader: "style-loader!css-loader?module=true&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]",
			exclude: /semantic/
		}, 
		{
			test: /semantic.*\.css$/,
			loader: "style-loader!css-loader?importLoaders=1"
		}
    ]
  },
};