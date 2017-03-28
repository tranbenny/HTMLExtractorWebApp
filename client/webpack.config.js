const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './app.js',
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist'),
		publicPath: '/'
	},

	context: resolve(__dirname, 'app'),
	devtool: 'inline-source-map',

	devServer: {
		hot: true,
		contentBase: resolve(__dirname, 'dist'),
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'babel-loader'
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?modules'
				]
			}
		]
	},

	plugins: []

};