/*
 * @Date: 2018-01-25 00:54:00
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-03-10 11:07:34
 * @FilePath: /quill-sharedb-cursors/webpack.config.js
 * @Description:
 */
var path = require("path");

module.exports = {
  entry: "./public/javascripts/main.js",
  module: {
    rules: [
      {
        test: /\.svg/,
        use: ["file-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist"),
  },
};
