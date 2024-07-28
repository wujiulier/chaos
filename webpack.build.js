const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         exclude: /\.module\.css$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               publicPath: '../', // Adjust publicPath if necessary
//             },
//           },
//           'css-loader',
//           'postcss-loader',
//         ],
//       },
//       {
//         test: /\.module\.css$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               publicPath: '../', // Adjust publicPath if necessary
//             },
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: {
//                 localIdentName: '[path][name]__[local]--[hash:base64:5]',
//               },
//             },
//           },
//           'postcss-loader',
//         ],
//       },
//       {
//         test: /\.less$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               publicPath: '../', // Adjust publicPath if necessary
//             },
//           },
//           'css-loader',
//           'less-loader',
//         ],
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               publicPath: '../', // Adjust publicPath if necessary
//             },
//           },
//           'css-loader',
//           'sass-loader',
//         ],
//       },
//       {
//         test: /\.svg$/,
//         use: [
//           '@svgr/webpack',
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'images/[name].[hash].[ext]',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'images/[name].[hash].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
});
