const {hash,compare} = require('bcrypt');

exports.compareFun=(strPass,hashPassword,cb)=>{
    compare(strPass, hashPassword,(error, status)=> {
      if (error) return cb(error)
      cb(null,status)
  })
}



exports.hashFun=(strPass,cb)=>{
  hash(strPass, 8,(error, hash)=> {
  if (error) return cb(error)
    return cb(null,hash)
  })
}
