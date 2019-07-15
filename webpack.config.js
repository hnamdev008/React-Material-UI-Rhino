const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const isProduction = process.argv.indexOf('-p') >= 0;
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');
const nodeEnv = process.env.NODE_ENV || 'development';

const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
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
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts(x?)$/,
                use: [
                    'react-hot-loader/webpack',
                    'awesome-typescript-loader'
                ],
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=2&sourceMap',
                    'postcss-loader',
                    'sass-loader?sourceMap'
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
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        plugins: [
            new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
        ]
    },
    plugins: [
        // hot reload
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
        new webpack.LoaderOptionsPlugin({
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
    ],
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        port: 8080,
        host: '0.0.0.0'
    }
};
