/*
 * @Date: 2018-01-25 00:54:00
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-03-10 12:06:59
 * @FilePath: /quill-sharedb-cursors/component/quill/webpack.config.js
 * @Description:
 */
var path = require("path");

module.exports = {
  entry: {
    quill: ["./quill.js"],
  },
  output: {
    filename: "[name].js",
    library: "Quill",
    libraryExport: "default",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.svg/,
        use: ["file-loader"],
      },
    ],
  },
};
