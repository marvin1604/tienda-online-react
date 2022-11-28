const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports ={
    entry: './src/index.js',
    output : {
        path: path.resolve(__dirname, "dist"),
        filename : 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    // devServer:{
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 3005,
    // }
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
          },
        compress: true,
        port: 3005,
        historyApiFallback:true,
    }
}