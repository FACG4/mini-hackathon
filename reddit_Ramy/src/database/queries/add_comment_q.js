const dbConnect = require('./../db_connect');
exports.addCommentQ=(userId,commentContent,postId,commentId,cb)=>{

let sql=[];
      if ((postId==null && commentId==null) ||(postId!=null && commentId!=null) ){
        return cb({errType:'one of (postId) or (commentId) must be null and both'})
      }
      else if (postId) {
         sql={
          text:`INSERT INTO comments (user_id,comment_content,on_post_id,on_comment_id)
          VALUES
          ($1,$2,$3,NULL)
            RETURNING user_id`,
          values:[userId,commentContent,postId]
        }
      }
      else if (commentId) {
         sql={
          text:`INSERT INTO comments (user_id,comment_content,on_post_id,on_comment_id)
          VALUES
          ($1,$2,NULL,$3)
          RETURNING user_id`,
          values:[userId,commentContent,commentId]

        }

      }

      dbConnect.query(sql,(err,result)=>{
        if (err) return cb({errType:'Error in inserting comment into database'})
        return cb(null,result.rows)
      })
}
