const dbConnect = require('./../db_connect');
exports.checkLoginQ=(user_name,cb)=>{
  const sql = {
    text:'SELECT * FROM users WHERE  user_name=$1',
    values:[user_name.toLowerCase()]
  }
  dbConnect.query(sql,(err,result)=>{
    if (err) return cb({errType:'Error in check user login'})
    if (result.rows.length>0)  return cb(null, result.rows)
    //no invalid user name or password
    else  cb(null,null)
  })

}
