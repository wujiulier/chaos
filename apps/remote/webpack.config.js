const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { transpile } = require('typescript');
const webpack = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true','./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: { "querystring": require.resolve("querystring-es3") }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // use: [
        //     {
        //         loader: 'ts-loader',
        //         options: {
        //             transpileOnly: true,
        //             compilerOptions: {
        //                 sourceMap: true,
        //             }
        //         }
        //     }
        // ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]', // 定义 CSS 类名的生成规则
                }
            },
          },
          'postcss-loader',
          path.resolve(__dirname,'webpack-debug-loader.js'),
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack','file-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist')
    },
    compress: true,
    hot: true,
    port: 3003,
    open: true,
    client: {
        overlay: true,
        webSocketURL: 'auto://0.0.0.0:0/ws', // 确保客户端配置正确
      },
      allowedHosts: 'all', // 允许所有主机访问
  },
  devtool: 'source-map'
};
