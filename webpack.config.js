const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    entry: {
        boundle: path.resolve(__dirname, 'src/index.js')
    },
    devtool:'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader','postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({ template: 'dist/index.html' }),
        new MiniCssExtractPlugin()
    ]
}