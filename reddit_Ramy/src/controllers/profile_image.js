const {profileImageQ} = require('./../database/queries/profile_image_q');
const {serverError} = require('./error');

exports.profileImage=(req,res)=>{
  if (req.userInfo) {
      const imageFile = req.files.imageFile

    const userId=req.userInfo.id
    const imgUrl=`/${Date.now()}.jpg`
    imageFile.mv('./src/database/profile_image/'+imgUrl, (err)=> {
      profileImageQ(userId,imgUrl,(err,result)=>{
        if (err) return serverError(req,res)

        res.redirect('/')
      })



    });

  }else {
    if (err) return serverError(req,res)
  }

}
