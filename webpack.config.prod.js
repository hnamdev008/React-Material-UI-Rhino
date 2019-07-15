const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

const isProduction = process.argv.indexOf('-p') >= 0;
const outPath = path.join(__dirname, './dist');

const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: [
            './src/js/index.tsx',
        ],
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux-thunk',
            'redux',
            'redux-form',
            'material-ui'
        ]
    },
    output: {
        path: outPath,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.ts(x?)$/,
                use: [
                    'awesome-typescript-loader'
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml',
            },
            {
                test: /(\.json)$/,
                use: 'json-loader',
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins: [
        // hot reload
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isProduction ? JSON.stringify('production') : JSON.stringify('development'),
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['Chrome >= 49', 'Firefox >= 49', 'Edge >= 13']
                    })
                ],
                resolve: {
                    extensions: ['.ts', '.tsx', '.js']
                }
            }
        }),
        new CheckerPlugin()
    ]
};
