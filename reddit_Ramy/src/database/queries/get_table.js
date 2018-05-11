const dbConnect = require('./../db_connect');
const escape = require('pg-escape');
exports.getTable=(table,cb)=>{
  const sql = escape('SELECT * FROM %I', table);
      dbConnect.query(sql,(err,result)=>{
        if (err) return cb({errType:'Error in get table data'})
        return cb(null,result.rows)
      })
}
