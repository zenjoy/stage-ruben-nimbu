const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// import and configure dotenv
require('dotenv-defaults').config();

const paths = require('./paths');
const pages = require('./pages');

let publicUrl = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';
if (!publicUrl) {
  publicUrl = '/';
} else if (!publicUrl.endsWith('/')) {
  // ensure last slash exists
  publicUrl = publicUrl + '/';
}

module.exports = {
  entry: {
    index: `${paths.src}/index.js`,
  },
  output: {
    path: paths.dist,
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Image assets
      {
        test: /\.(gif|ico|jpe?g|png|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      // Fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
  plugins: pages
    .map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${paths.src}/${page.file}`,
          templateParameters: {
            publicUrl: publicUrl.slice(0, -1),
          },
          title: page.title,
        })
    )
    .concat([
      new CopyPlugin({
        patterns: [
          {
            from: '**/*',
            context: paths.public,
          },
        ],
      }),
      new ESLintPlugin({
        extensions: 'js',
        context: paths.src,
      }),
      new Dotenv(),
    ]),
};
