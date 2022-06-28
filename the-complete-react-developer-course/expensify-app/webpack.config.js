/**
 let webpack know where the entry point is
 let webpack know where to output the final js file
 */
const path = require('path')

const pathToPublic = path.join(__dirname, 'public')
module.exports = {
    entry: './src/playground/redux-expensify.js',
    output: {
        path: pathToPublic, // absolute path on machine to where to output the bundle
        filename: 'bundle.js' // can rename this to anything
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
        liveReload: true,
        historyApiFallback: true
    },
    mode: 'development'
}
/*
    loaders let you customize the behavior of webpack when it loads a specific file
    transform with babel
    install some things
        local dependencies
            babel-core -> allows you to run babel from webpack
            babel-loader -> plugin for webpack
*/
/*
    webpack dev server 
        is like live-server
        works specific for webpack
        there are many options, but the important one is contentBase
        contentBase lets webpack know where to find the public files
*/