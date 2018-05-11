const dbConnect = require('./../db_connect');

exports.getCommentsVotesCountQ=(commentId,cb)=>{
  const sql = {
    text:'SELECT COUNT(comment_id) FROM votes_comment WHERE comment_id =$1',
    values:[commentId]

  }
  dbConnect.query(sql,(err,result)=>{
    if (err) return cb(err)
    return cb(null,result.rows[0].count)
  })
}
