const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: path.join(__dirname, "/src/index.js")
    // two: path.join(__dirname, "src/two.js")
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"],
          publicPath: "../"
        })
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              outputPath: "images"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin("版权所有，翻版必究"),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.template.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("css/index.css")
  ]
};
