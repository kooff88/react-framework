const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PurifyCssWebpack = require("purifycss-webpack");
const glob = require("glob");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, "src/*.html"))
    })
  ]
});
