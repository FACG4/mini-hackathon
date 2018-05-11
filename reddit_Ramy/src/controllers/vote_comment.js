const {serverError} = require('./error');

const {toggleVoteQ} = require('./../database/queries/toggle_vote_q');
exports.voteComment=(req,res)=>{
  if (req.userInfo) {
    const commentId=req.params.commentId
    const userId=req.userInfo.id
    toggleVoteQ('comment',commentId,userId,(err,result)=>{
      if (err) return serverError(req,res)
      else if (result=="deleted")  return res.send({ success: true, message: 'deleted'})
      else  if (result=="inserted")  return res.send({ success: true, message: 'inserted'})
    })
  }
}
