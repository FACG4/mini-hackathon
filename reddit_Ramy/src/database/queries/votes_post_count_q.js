const dbConnect = require('./../db_connect');

exports.getVotesCountQ=(postId,cb)=>{
  const sql = {
    text:'SELECT COUNT(post_id) FROM votes_post WHERE post_id =$1',
    values:[postId]

  }
  dbConnect.query(sql,(err,result)=>{
    if (err) return cb(err)
    return cb(null,result.rows[0].count)
  })
}
