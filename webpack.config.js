const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const PATHS = {
	src: path.resolve(__dirname, 'src/main/JS/src'),
	build: path.resolve(__dirname, 'src/main/resources/static/built'),
};

module.exports = {
	context: PATHS.src,
	entry: {
		app: './index.jsx',
	},
	output: {
		path: PATHS.build,
		filename: '[name].js',
	},
	module: {
		rules: [
			{ test: /\.jsx$/, loader: 'babel-loader' },
			{ test: /\.(jpg|png|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 40000,
				},
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: '[name].js',
			minChunks(module) {
				return module.context && module.context.indexOf('node_modules') !== -1;
			},
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity,
		}),
		new CleanWebpackPlugin(PATHS.build),
	],
};
