const dbConnect = require('./../db_connect');
exports.getAllPosts=((cb)=>{
  // sql='SELECT t3.comment_content,t1.post_title,t1.img_url,t1.post_content,t2.user_name FROM posts t1 inner join users t2 on t2.id=t1.user_id right join comments t3 on t3.on_post_id=t1.id'
  sql='SELECT t1.id,t2.id AS userID ,t1.post_title,t1.img_url,t1.post_content,t2.user_name FROM posts t1 inner join users t2 on t2.id=t1.user_id '
  dbConnect.query(sql,(err,result)=>{
    // console.log(err);
    // console.log(result.rows,'gggggggggggggg');
    if (err) return cb(err)
    return cb(null,result.rows)
  })
})
