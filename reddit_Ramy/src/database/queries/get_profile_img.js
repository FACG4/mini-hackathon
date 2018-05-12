const dbConnect = require('./../db_connect');

exports.getProfileImg=(userId,cb)=>{

  const sql={
    text:'SELECT img_profile FROM users WHERE id=$1',
    values:[userId]
  }
  dbConnect.query(sql,(err,res)=>{

    if (err) return cb(err)
    return cb(null,res.rows[0])
  })
}
