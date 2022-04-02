var ShareDB = require("./../component/sharedb");

ShareDB.types.register(require("./../component/rich-text").type);

module.exports = new ShareDB({
  // db: require('sharedb-mongo')(process.env.MONGODB_URI || 'mongodb://localhost/quill-sharedb-cursors?auto_reconnect=true',
  db: require("sharedb-mongo")(
    process.env.MONGODB_URI || "mongodb://localhost/quill-sharedb-cursors"
  ),
});
