const dbConnect = require('./../db_connect');
exports.getSinglePostQ=(postId,cb)=>{
const  sql={text:'SELECT t1.id,t2.id AS userID ,t1.post_title,t1.img_url,t1.post_content,t2.user_name FROM posts t1 inner join users t2 on t2.id=t1.user_id WHERE t1.id=$1',
    values:[postId]
    }
  dbConnect.query(sql,(err,result)=>{
    // console.log(result.rows,'result');
    if (err) return cb(err)
    console.log(result.rows[0],'ramy');
    return cb(null,result.rows[0])
  })
}
