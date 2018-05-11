const {toggleVoteQ} = require('./../database/queries/toggle_vote_q');
const {serverError} = require('./error');

exports.votePost=(req,res)=>{
  if (req.userInfo) {
    const postId=req.params.postId.split('post')[1];
    const userId=req.userInfo.id
    toggleVoteQ('post',postId,userId,(err,result)=>{
      if (err) return serverError(req,res)
      else if (result=="deleted")  return res.send({ success: true, message: 'deleted'})
      else  if (result=="inserted")  return res.send({ success: true, message: 'inserted'})

    })
  }
}
