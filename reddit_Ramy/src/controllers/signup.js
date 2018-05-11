const {addUserQ} = require('./../database/queries/insert_user_q');
const {hashFun} = require('./bcrypt');
const {creatToken} = require('./create_token');
const {validSignup} = require('./valid_signup');
const {serverError} = require('./error');

exports.post=(req,res)=>{

  const {userName,password,email}=req.body
  validSignup(req,(status)=>{
    if (status) {
      hashFun(password,(err,hash)=>{
        if (err) return serverError(req,res)
       addUserQ(userName,hash,email,(err,result)=>{
         if (err) return serverError(req,res)
          const data={id:result[0].id,username:result[0].user_name}
         creatToken(data,res,(err,tokenStatus)=>{
           if (err) return serverError(req,res)
           if(tokenStatus){
             return res.send({ success: true, message: 'User successfully created',redirect:'/'})
           }
         })
       })
      })
    }
    else{
      return res.status(400).send({ error: {errorType:'client', msg: 'invalid inputs'}})

    }

  })
}

exports.get=(req,res)=>{
  if (req.logged=='verified') {
    res.redirect('/')
  }
    else if (req.logged=='not-verified') {
      res.render('signup',{jsFile:'signup'})
      }
}
