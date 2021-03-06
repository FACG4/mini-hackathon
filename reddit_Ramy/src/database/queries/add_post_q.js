const dbConnect = require('./../db_connect');
exports.addPostQ=(userId,post_title,postContent,imgUrl,cb)=>{

  const sql={
    text:'INSERT INTO posts (user_id,post_title,post_content,img_url) values ($1,$2,$3,$4) RETURNING *',
    values:[userId,post_title,postContent,imgUrl]
  }
  dbConnect.query(sql,(err,result)=>{
    if (err) return cb({errType:'Error in add post'})
    return cb(null,result.rows)
  })
}
