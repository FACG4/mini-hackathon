const {toggleVoteQ} = require('./../database/queries/toggle_vote_q');
exports.voteComment=(req,res)=>{
  if (req.userInfo) {
    const commentId=req.params.commentId
    console.log(commentId,'commnetID');
    const userId=req.userInfo.id
    toggleVoteQ('comment',commentId,userId,(err,result)=>{
      console.log(result);
      if (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
      else if (result=="deleted")  return res.send({ success: true, message: 'deleted'})
      else  if (result=="inserted")  return res.send({ success: true, message: 'inserted'})
    })
  }
}
