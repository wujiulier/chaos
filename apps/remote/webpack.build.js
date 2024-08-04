const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
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
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDom",
  //   "react-router-dom": "ReactRouterDom",
  // },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
          compress: {
            drop_console: false,
          },
          mangle: false
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: "single",
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 200000,
      minChunks: 1,
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            return `npm.${packageName.replace("@", "")}`;
          },
        },
        common: {
          name: 'common',
          minChunks: 2,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
    usedExports: true,
  },
});
