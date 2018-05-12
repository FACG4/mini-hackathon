const dbConnect = require('./../db_connect');
exports.getUserPostsQ=(profileId,cb)=>{
const  sql={text:'SELECT t1.id,t2.id AS userID ,t1.post_title,t1.img_url,t1.post_content,t2.user_name FROM posts t1 inner join users t2 on t2.id=t1.user_id where t2.id=$1',
    values:[profileId]
    }
  dbConnect.query(sql,(err,result)=>{
    if (err) return cb(err)
    return cb(null,result.rows)
  })
}
