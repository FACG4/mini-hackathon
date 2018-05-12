var validator = require('validator');
exports.validPost=(postTitle,postContent,imgFile,cb)=>{
return cb(
  imgFile &&
  validator.isLength( postTitle,{min:3, max: 50}) &&
  validator.isLength( postContent,{min:3, max:200})
)

}
