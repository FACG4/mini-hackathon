const dbConnect = require('./../db_connect');
exports.uniqueUserQ=(userName,email,cb)=>{
  let sql =[];
    if (userName && !email) {
       sql = {
        text :'SELECT * FROM users WHERE user_name = $1',
        values:[userName.trim().toLowerCase()]
      }
    }
    else if (!userName && email) {
       sql = {
        text :'SELECT * FROM users WHERE email= $1',
        values:[email.trim().toLowerCase()]
      }
    }
    else return cb({errType:'Error in arguments user unique '})
  dbConnect.query(sql,(err,result)=>{
    if (err) return cb({errType:'database Error in check user unique'})

    //this mean user name or email is exists
    if (result.rows.length>0) return cb(null,false,result.rows)
    //this mean user name and email is  NOT exists
    return cb(null,true)
  })
}
