const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('/Users/young/Code/webpack/lib/index');
const MyCustomWebpackPlugin = require('./webpack-debug-plugin');


module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json')
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            // 'style-loader',
             'css-loader', 
             'postcss-loader'],
      },
      {
        test: /\.module\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
        //   'style-loader',
          {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: {
                    localIdentName: '[path][name]__[local]___[hash:base64:5]', // 定义 CSS 类名的生成规则
                }
            },
          },
          'postcss-loader',
        //   path.resolve(__dirname,'webpack-debug-loader.js'),
        ],
      },
      {
        test: /\.less$/,
        use: [
            MiniCssExtractPlugin.loader,
            // 'style-loader', 
            'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: [
            // MiniCssExtractPlugin.loader,
            // 'style-loader', 
            'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.svg$/,
      //   issuer: /\.[jt]sx?$/, // 仅在 JS/TS 文件中处理 @svgr/webpack
      //   use: ['@svgr/webpack'],
      // },
      // {
      //   test: /\.svg$/,
      //   type: 'asset/resource',
      //   generator: {
      //       filename: 'images/[name].[hash][ext][query]'
      //   },
      // },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack','file-loader'],

        // svg 提取到单独的 文件列表下
        // type: 'asset/resource',
        // generator: {
        //     filename: 'images/[name].[hash][ext][query]'
        // }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext][query]'
        }
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //         name: 'images/[name].[hash].[ext]',
        //     }
        //   },
        // ],
      },
    ]
  },
  plugins: [
    new MyCustomWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.ejs',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
    })
  ]
};
