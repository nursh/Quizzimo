const webpack = require('webpack');
const path = require('path');


const PATHS = {
	src: path.resolve(__dirname, 'src/main/JS'),
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
					limit: 8000,
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
	],
};
