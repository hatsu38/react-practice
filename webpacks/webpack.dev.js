const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const dist = path.join(__dirname, "dist");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: dist,
    publicPath: "/",
    filename: "[name].js",
  },
  devtool: "eval",
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: "localhost",
    port: 8080,
    clientLogLevel: "info",
  },
});