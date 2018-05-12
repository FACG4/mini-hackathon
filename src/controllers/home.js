const {getAllPosts} = require('./../database/queries/get_all_posts_q');
const {getProfileImg} = require('./../database/queries/get_profile_img');
const {getVotesCountQ} = require('./../database/queries/votes_post_count_q');
const {checkPostIsVotedByUser} = require('./../database/queries/check_is_voted_by_user');
const {renderHomeAndProfile} = require('./render_home_and_profile');
const {serverError} = require('./error');

exports.home=(req,res)=>{

  let data = [];
getAllPosts((err,result)=>{

  if (err) return serverError(req,res)
  let counter =0;
  result.forEach(item=>{
    getVotesCountQ(item.id,(err,count)=>{
      item.count=count;
      if (req.userInfo) {
        getProfileImg(req.userInfo.id,(err,image)=>{
          if (err) return serverError(req,res)
          result.img_profile=image
        })
      checkPostIsVotedByUser(req.userInfo.id,item.id,(err,status)=>{
        if (err) return serverError(req,res)
        item.isVoted=status
      })
    }
      counter++;
      if (counter===result.length) {
        result.right=true
        renderHomeAndProfile(req,res,result)
      }
      })
    })
})
}
// exports.home=(req,res)=>{
//   let data = [];
// getAllPosts((err,result)=>{
//
//   if (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
//   result.forEach(item=>{
//     getVotesCountQ(item.id,(err,count)=>{
//       if  (err) return res.status(500).send({ error: {errorType:'server', msg: 'Server Error'}})
//       item.count=count;
//       })
//     })
//     if (req.logged=='verified') {
//       res.render('home',{username:req.userInfo.username,activPage:'home'})
//     }
//     else if (req.logged=='not-verified') {
//       res.render('home',{posts:result})
//     }
//     console.log(result,'tttttttttttt');
//
//
// })
// }
