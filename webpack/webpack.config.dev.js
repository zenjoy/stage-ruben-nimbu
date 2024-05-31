const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.config.common')
const paths = require('./paths')

module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    hot: false,
    liveReload: false,
    watchFiles: [`${paths.src}/*.html`, `${paths.src}/images/**.*`],
    port: process.env.PORT || 8080,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/privacy$/, to: '/privacy.html' },
        { from: /^\/terms$/, to: '/terms.html' },
        { from: /^\/message$/, to: '/message.html' },
      ],
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  /* Additional plugins configuration */
  plugins: [],
})
