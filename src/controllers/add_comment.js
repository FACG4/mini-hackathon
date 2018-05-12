const {addCommentQ} = require('./../database/queries/add_comment_q');
const {serverError} = require('./error');

exports.addComment=(req,res)=>{

  const postId=req.headers.referer.split('/')[4]
  const commentContent=req.body.commentContent
  const userId=req.userInfo.id
  addCommentQ(userId,commentContent,postId,null,(err,result)=>{
    if (err) return serverError(req,res)
    res.send({redirect:req.headers.referer})
  })


// exports.addCommentQ=(userId,commentContent,postId,commentId,cb)=>{
}
