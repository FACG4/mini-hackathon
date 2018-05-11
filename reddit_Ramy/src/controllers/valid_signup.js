var validator = require('validator');
exports.validSignup=(req,cb)=>{
console.log(req.body,'validation');
const {username,email,password,cPassword}=req.body

console.log(cPassword,'cPassword');
console.log(password,'password');
console.log(password===cPassword,'===');
   return cb(validator.isLength( email,{min:5, max: 50}) &&
   validator.isEmail(email) &&
   validator.isLength( `${username}`,{min:3, max: 50}) &&
   password===cPassword &&
   RegExp('^[a-zA-Z0-9_]*$').test(username) &&
   RegExp('^.{1,}@.{2,}\..{2,}').test(email) &&
   RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(password)

    )
}
