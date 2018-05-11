const {getUserPostsQ} = require('./../database/queries/get_user_posts_q');
const {getVotesCountQ} = require('./../database/queries/votes_post_count_q');
const {getProfileInfoQ} = require('./../database/queries/get_profile_info_q');
const {checkPostIsVotedByUser} = require('./../database/queries/check_is_voted_by_user');
const {renderHomeAndProfile} = require('./render_home_and_profile');

exports.profiles=(req,res)=>{
  const profileId=req.params.profileId
  console.log(profileId,'profileId');
  console.log(req.userInfo,'req.userInfo');
  getProfileInfoQ(profileId,(err,profileInfo)=>{
    console.log(err);
    if (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
    if (profileInfo.length>0) {
      getUserPostsQ(profileId,(err,result)=>{
        if (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
        if (result.length>0) {


        let counter =0;
        console.log(result ,555555);
        result.forEach(item=>{
          getVotesCountQ(item.id,(err,count)=>{
            if  (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
            item.count=count;
            if (req.userInfo) {
              req.userInfo.isProfileOwner=req.userInfo.id==profileId
              const userId=req.userInfo.id
              checkPostIsVotedByUser(req.userInfo.id,item.id,(err,status)=>{
                if  (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
                item.isVoted=status
              })
            }

            counter++;
            console.log(counter);
            if (counter===result.length) {
              result.profileInfo=profileInfo
              result.right=false
              renderHomeAndProfile(req,res,result)
            }
          })
        })
      }else{
        result.profileInfo=profileInfo
        result.right=false
        renderHomeAndProfile(req,res,false)

      }

      })








    } else {

    res.send('<h1>there is no profile for this userName<h1>')
  }

  })
}
