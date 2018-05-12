const dbConnect = require('./../db_connect');

exports.getCommnetsQ=(postId,cb)=>{
  const sql ={
    text:'SELECT comments.* , users.user_name FROM comments INNER JOIN posts ON  comments.on_post_id=posts.id INNER JOIN users ON comments.user_id =users.id WHERE posts.id=$1',
    values:[postId]
  }
  dbConnect.query(sql,(err,result)=>{
    if (err) return cb(err)
    return cb(null,result.rows)
  })

}
