const {verify} = require('jsonwebtoken');

exports.verifyAuth=(req,res,next)=>{
  const token=req.cookies.token
  if (token) {
        verify(token, process.env.SECRET,(err, decoded)=>{
          if (err) {
            req.logged='changed'
            res.send('changed')
          }
          else{
            req.logged='verified'
                req.userInfo={
                  id:decoded.id,
                  username:decoded.username
                }
                next()
          }
        });
  }
  else{
    req.logged='not-verified'
    next()
  }
}
