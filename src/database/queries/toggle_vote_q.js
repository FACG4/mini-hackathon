const dbConnect = require('./../db_connect');
const escape = require('pg-escape');

exports.toggleVoteQ=(table,value,userId,cb)=>{
  const sqlSearch = escape(`SELECT * FROM votes_%I WHERE  user_id= %L AND %I_id= %L`, table,`${userId}`,table,`${value}`);
  dbConnect.query(sqlSearch,(errSearch,resultSearch)=>{
    if (errSearch) return cb({errType:`database Error when search for votes (${table})`})
    if (resultSearch.rows.length>0) {
    const sqlDelete = escape(`DELETE FROM votes_%I WHERE  user_id= %L AND %I_id= %L`, table,`${userId}`,table,`${value}`);
       dbConnect.query(sqlDelete,(errDelete,resultDelete)=>{
         if (errDelete) return cb({errType:`database Error when DELETE for votes (${table})`})
         return cb(null,'deleted')
       })
    }
    else{
      const sqlInsert = escape(`INSERT  INTO  votes_%I (user_id,%I_id)  VALUES (%L,%L)  RETURNING *`, table,table,`${userId}`,`${value}`);
      dbConnect.query(sqlInsert,(errInsert,resultInsert)=>{
        if (errInsert) return cb({errType:`database Error when Insert for votes (${table})`})
        return cb(null,'inserted')
      })
    }

  })



}
