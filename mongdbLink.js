/*
 * @Date: 2022-03-07 16:20:01
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-03-07 16:24:32
 * @FilePath: /quill-sharedb-cursors-master/mongdbLink.js
 * @Description:
 */
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost/quill-sharedb-cursors";

MongoClient.connect(url,{
  reconnectTries: Number.MAX_VALUE  
}, function (err, db) {
  if (err) throw err;
  console.log("数据库已连接!");
  db.close();
});
