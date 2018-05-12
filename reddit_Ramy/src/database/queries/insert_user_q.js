const dbConnect = require('./../db_connect');
exports.addUserQ=(user_name,hashPassword,email,cb)=>{
  // if (!user_name || !hashPassword || email=='null') {
  //   return cb({errType:'Error in inserting users into database null Values'})
  //   console.log(5555);
  // }
  const sql={
    text:'INSERT INTO users (user_name,password,email) VALUES ($1,$2,$3) RETURNING * ',
    values:[user_name.trim().toLowerCase(),hashPassword,email]
    }
    dbConnect.query(sql,(err,result)=>{
      if (err) return cb({errType:'Error in inserting users into database'})
      return cb(null,result.rows)
    })
}
