const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production', //Mode
    entry : './src/index.js', //Entry
    output : { //Output
        path : path.join(__dirname, './dist'),
        filename : 'index_bundle.js'
    },
    module: { //Loaders
        rules : [
            {
                test: /\.js$/,
                exclude : /\node_modules/,
                use : {
                    loader:'babel-loader'
                }
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    },
                  },
                ],
            },
            {
                test: /\.(ttf)$/,
                use: {
                  loader: 'url-loader',
                },
              },
        
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    // devServer: {
    //     contentBase: './dist'
    //   },
    plugins : [ //Plugins
        new HtmlWebpackPlugin({
            template : './src/index.html'
        })
    ]

    //Browser Compatibility

}