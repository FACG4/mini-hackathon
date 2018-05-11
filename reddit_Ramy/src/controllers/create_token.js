const {sign} = require('jsonwebtoken');
exports.creatToken=(data,res,cb)=>{
  sign(JSON.stringify(data) , process.env.SECRET,(err, token) =>{
    if (err) return cb(err);
    res.cookie('token',token)
    return cb(null,true)
  });
}
