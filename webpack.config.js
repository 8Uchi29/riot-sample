var webpack = require('webpack');

module.exports = {
    entry: './browser/index',
	mode: 'production',
    output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			riot: 'riot'
		})
	],
	module: {
		rules: [
			{ test: /\.js$|\.tag$|\.riot$/, exclude: /node_modules/, loader: 'babel-loader'},
			{ test: /\.tag$|\.riot$/, exclude: /node_modules/, loader: 'riotjs-loader', enforce: 'pre'}
		]
	}
}