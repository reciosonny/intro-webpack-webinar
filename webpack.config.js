const HtmlWebpackPlugin = require("html-webpack-plugin");

var path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader", //Exports HTML as string. HTML is minimized when the compiler demands. Then passes it over to extract-loader.
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }), //this plugin is responsible for injecting the entry scripts of webpack (such as `bundle.js` and `vendor.js`) inside the html file without specifying them manually.
  ]
};