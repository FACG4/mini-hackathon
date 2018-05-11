const {validPost} = require('./valid_post');
const {addPostQ} = require('./../database/queries/add_post_q');

exports.createPost=(req,res)=>{
  console.log('hi');
  const userId=req.userInfo.id
  const postTitle=req.body.postTitle.trim().toLowerCase()
  const postContent=req.body.postContent.trim().toLowerCase()
  const imageFile = req.files.imageFile
  validPost(postTitle,postContent,imageFile,(status)=>{
    if (status) {
      const imgUrl=`/${Date.now()}.jpg`

      imageFile.mv('./src/database/images/'+imgUrl, (err)=> {
  if (err) return   console.log(err); //500 error
  addPostQ(userId,postTitle,postContent,imgUrl,(err,result)=>{
    if (err)   console.log(err); //500 error
    res.redirect('/')

  })

});

    }
    else {
      res.send({errMsg:'invalid post inputs'})
    }
  })
}
