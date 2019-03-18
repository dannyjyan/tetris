const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname)
  },
  module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader"
          ]
      },
    ]
  },
  plugins: [
      new HTMLWebpackPlugin({
          title: "Tetris",
          filename: 'index.html',
          template: 'src/index.html'
      })
  ]
};
