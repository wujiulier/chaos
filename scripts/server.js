const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.dev.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
  })
);

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(3003, () => {
  console.log('Server is running on http://localhost:3003');
});
