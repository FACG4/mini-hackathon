const dbConnect = require('./../db_connect');
exports.getProfileInfoQ=(profileId,cb)=>{
const  sql={text:'SELECT id,user_name from users where id=$1',
    values:[profileId]
    }
  dbConnect.query(sql,(err,result)=>{
    if (err) return cb(err)
    return cb(null,result.rows)
  })
}
