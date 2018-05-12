const {validPost} = require('./valid_post');
const {addPostQ} = require('./../database/queries/add_post_q');
const {serverError} = require('./error');

exports.createPost=(req,res)=>{
  const userId=req.userInfo.id
  const postTitle=req.body.postTitle.trim().toLowerCase()
  const postContent=req.body.postContent.trim().toLowerCase()
  const imageFile = req.files.imageFile
  validPost(postTitle,postContent,imageFile,(status)=>{
    if (status) {
      const imgUrl=`/${Date.now()}.jpg`

      imageFile.mv('./src/database/images/'+imgUrl, (err)=> {
        if (err) return serverError(req,res)
  addPostQ(userId,postTitle,postContent,imgUrl,(err,result)=>{
    if (err) return serverError(req,res)
    res.redirect('/')

  })

});

    }
    else {
      serverError(req,res)
    }
  })
}
