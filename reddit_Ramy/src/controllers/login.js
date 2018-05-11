const {compareFun} = require('./bcrypt');
const {checkLoginQ} = require('./../database/queries/check_login_q');
const {creatToken} = require('./create_token');
exports.post=(req,res)=>{
  const {username,password}=req.body
  checkLoginQ(username,(err,result)=>{
    console.log(result);
    if(err) return console.log(err); //500 error
    else if(result){
      const hashedPass=result[0].password
      compareFun(password,hashedPass,(err,status)=>{
        if(err) return console.log(err);
        else if(status){
          // we need to cerate cookie and redirect user to home page
          // const data={id:result[0].id,userName}

          const data={id:result[0].id,username:result[0].user_name}
          console.log(data);
          creatToken(data,res,(err,status)=>{
            if (err) return console.log(err);  // 500 Error
            if(status){
              res.redirect('/')
            }
          })
        }
        else {
          //we need to send to dom error say (invaled username or password)
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
