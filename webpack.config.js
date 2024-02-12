const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["@babel/polyfill",'./index.js'], // вказуємо шлях до вихідного файлу (індексного файлу)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
              test: /\.(?:js|mjs|cjs)$/,
              exclude: /node_modules/,
              use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ],
      },
      devServer: {
        port: 3000,
      },
};