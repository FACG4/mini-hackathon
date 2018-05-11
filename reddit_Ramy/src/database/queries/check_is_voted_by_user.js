const dbConnect = require('./../db_connect');
exports.checkPostIsVotedByUser=(userId,postId,cb)=>{
  const sql={
    text:'SELECT EXISTS(SELECT 1 FROM votes_post WHERE user_id=$1 AND post_id = $2)',
    values:[userId,postId]
  }
  dbConnect.query(sql,(err,exist)=>{

    if (err) return cb(err)
    return cb(null,exist.rows[0].exists)
  })
}
exports.checkcommentIsVotedByUser=(userId,commentId,cb)=>{
  const sql={
    text:'SELECT EXISTS(SELECT 1 FROM votes_comment WHERE user_id=$1 AND comment_id = $2)',
    values:[userId,commentId]
  }
  dbConnect.query(sql,(err,exist)=>{
console.log(err,'11111111111111111111');
    if (err) return cb(err)
    return cb(null,exist.rows[0].exists)
  })
}
