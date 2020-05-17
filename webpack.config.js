const path = require('path');
// подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// подключаем плагин
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: { 
        index: './src/index/index.js',
        about: './src/about/about.js',
        analytic: './src/analytic/analytic.js' 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                 use: [
                      'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
                      {
                              
                        loader: 'file-loader', 
                        loader: 'image-webpack-loader',
                              options: {}
                      },
                    ]
            },
            {
              test: /\.(eot|ttf|woff|woff2)$/,
              loader: 'file-loader?name=./vendor/[name].[ext]'
            },
            {
                test: /\.css$/i,
                    use: [
                            (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                                     'css-loader', 
                                    'postcss-loader'
                            ]
            }
        ]
    },
    plugins: [
    
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
    }),
        new HtmlWebpackPlugin({
            inject: false, 
            template: './src/index/index.html', 
            filename: 'index.html' 
          }),
        new HtmlWebpackPlugin({
          inject: false,
          template: './src/about/about.html',
          filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/analytic/analytic.html',
            filename: 'analytic.html'
          }),
        new WebpackMd5Hash()
      ]
    };