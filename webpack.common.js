const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
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
      {
        test: /\.svg$/,
        // use: ['@svgr/webpack','file-loader'],
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[hash][ext][query]'
        }
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
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
    })
  ]
};
