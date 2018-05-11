const path = require('path');
const fs = require('fs');

const dbConnection = require('./db_connect');

const sql = fs.readFileSync(path.join(__dirname,'build_db.sql')).toString();
exports.runDbBuild = (cb) => {

  dbConnection.query(sql, (err, res) => {

    if (err) return cb(err);
    cb(null, res.rows);
  });
};
