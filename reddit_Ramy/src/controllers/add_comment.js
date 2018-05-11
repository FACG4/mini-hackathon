const {addCommentQ} = require('./../database/queries/add_comment_q');

exports.addComment=(req,res)=>{
  console.log(req,9999999999999);
  console.log('hi');
  const postId=req.headers.referer.split('/')[4]
  console.log(postId,8888888888888888888888888888);
  const commentContent=req.body.commentContent
  const userId=req.userInfo.id
  console.log(userId,commentContent,postId);
  addCommentQ(userId,commentContent,postId,null,(err,result)=>{
    if (err) return  console.log(err);
    res.send({redirect:req.headers.referer})
  })


// exports.addCommentQ=(userId,commentContent,postId,commentId,cb)=>{
}
