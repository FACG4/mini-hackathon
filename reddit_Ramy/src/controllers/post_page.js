const {getSinglePostQ} = require('./../database/queries/get_single_post_q');
const {getVotesCountQ} = require('./../database/queries/votes_post_count_q');
const {getCommentsVotesCountQ} = require('./../database/queries/get_comments_votes_count_q');
const {getCommnetsQ} = require('./../database/queries/get_comments_q');
const {checkPostIsVotedByUser,checkcommentIsVotedByUser} = require('./../database/queries/check_is_voted_by_user');
const {renderHomeAndProfile,renderSinglePost} = require('./render_home_and_profile');

exports.postPage=(req,res)=>{
  const postId=req.params.postId
    getSinglePostQ(postId,(err,result)=>{
      if (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
            getVotesCountQ(postId,(err,count)=>{
              if  (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
              result.count=count;
              if (req.userInfo) {
              checkPostIsVotedByUser(req.userInfo.id,postId,(err,status)=>{
                if  (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
                result.isVoted=status
              })
            }
            getCommnetsQ(postId,(err,comments)=>{
              if  (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
              result.comments=comments

              let counter=0;
              console.log(result, 'romio');
              if (comments.length>0) {

              result.comments.forEach(item=>{
                getCommentsVotesCountQ(item.id,(err,count)=>{
                  if  (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
                  item.commentCount=count
                  ++counter
                  if (req.userInfo) {
                    checkcommentIsVotedByUser(req.userInfo.id,item.id,(err,isVotedComment)=>{
                      if  (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
                      item.isVotedC=isVotedComment
                    })
                  }
                  if (counter===result.comments.length) {
                    renderSinglePost(req,res,result)
                  }
              })
            })
          }else{
            renderSinglePost(req,res,result)

          }


            })
              })

      })

}
