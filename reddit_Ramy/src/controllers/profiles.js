const {getUserPostsQ} = require('./../database/queries/get_user_posts_q');
const {getVotesCountQ} = require('./../database/queries/votes_post_count_q');
const {getProfileInfoQ} = require('./../database/queries/get_profile_info_q');
const {checkPostIsVotedByUser} = require('./../database/queries/check_is_voted_by_user');
const {renderHomeAndProfile} = require('./render_home_and_profile');
const {serverError,clientError} = require('./error');

exports.profiles=(req,res)=>{
  const profileId=req.params.profileId

  getProfileInfoQ(profileId,(err,profileInfo)=>{
    if (err) return serverError(req,res)
    if (profileInfo) {
      getUserPostsQ(profileId,(err,result)=>{
        result.profileInfo=profileInfo.img_profile

        if (err) return serverError(req,res)
        if (result.length>0) {

        let counter =0;
        result.forEach(item=>{
          getVotesCountQ(item.id,(err,count)=>{
            if (err) return serverError(req,res)
            item.count=count;
            if (req.userInfo) {
              req.userInfo.isProfileOwner=req.userInfo.id==profileId
              const userId=req.userInfo.id
              checkPostIsVotedByUser(req.userInfo.id,item.id,(err,status)=>{
                if (err) return serverError(req,res)
                item.isVoted=status
              })
            }

            counter++;
            if (counter===result.length) {
              result.profileInfo=profileInfo
              result.right=false
              renderHomeAndProfile(req,res,result)
            }
          })
        })
      }else{
        result.right=false
        renderHomeAndProfile(req,res,false)

      }

      })








    } else {
      clientError(req,res)
  }

  })
}
