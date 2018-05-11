const {compareFun} = require('./bcrypt');
const {checkLoginQ} = require('./../database/queries/check_login_q');
const {creatToken} = require('./create_token');
const {serverError} = require('./error');

exports.post=(req,res)=>{
  const {username,password}=req.body
  checkLoginQ(username,(err,result)=>{
    if (err) return serverError(req,res)
    else if(result){
      const hashedPass=result[0].password
      compareFun(password,hashedPass,(err,status)=>{
        if (err) return serverError(req,res)
        else if(status){

          const data={id:result[0].id,username:result[0].user_name}
          creatToken(data,res,(err,status)=>{
            if (err) return serverError(req,res)
            if(status){
              res.redirect('/')
            }
          })
        }
        else {
          res.send('wrong eamil or password')
        }
      })


    }
    else{
      //we need to send to dom error say (invaled username or password)
        res.send('wrong eamil or password')
    }
  })

}
exports.get=(req,res)=>{
  if (req.logged=='verified') {
    res.redirect('/')
  }
    else if (req.logged=='not-verified') {
      res.render('login')
      }
}
