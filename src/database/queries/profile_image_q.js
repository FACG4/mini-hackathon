const dbConnect = require('./../db_connect');
exports.profileImageQ=(userId,imgUrl,cb)=>{

  const sql={
    text:'UPDATE users SET img_profile=$1 WHERE id=$2',
    values:[imgUrl,userId]
  }
  dbConnect.query(sql,(err,result)=>{
    if (err) return cb({errType:'Error in add image'})
    return cb(null,result.rows)
  })
}
