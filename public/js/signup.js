const signUpForm =document.querySelector('#signUpform')
const existUser =document.querySelector('#existUser')
const existEmail =document.querySelector('#existEmail')
existUser.style.display='none'
existEmail.style.display='none'
console.log(signUpForm);

let userName,email,userNameIcon,errorMsg,password,cPassword,passwordIcon,cPasswordIcon,emailIcon
if (signUpForm) {
 userName =document.querySelector('#userName')
 email =document.querySelector('#email')
 userNameIcon =document.querySelector('#userNameIcon')
 errorMsg =document.querySelector('#errorMsg')
 password =document.querySelector('#password')
 cPassword =document.querySelector('#cPassword')
 passwordIcon =document.querySelector('#passwordIcon')
 cPasswordIcon =document.querySelector('#cPasswordIcon')
 emailIcon =document.querySelector('#emailIcon')
 signupSubmit =document.querySelector('#signupSubmit')
}

userName.addEventListener('keyup',e=>{
  fetch('/uniqueUserName',{
          headers: { 'content-type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({
            userName:userName.value
          })
    }).then(res=>res.json())
    .then(res=>{
      if (res.error && res.error.errorType=='client') {
        existUser.style.display = 'block';
        existUser.textContent = 'User name has been taken';


      }
      else{
        existUser.style.display  = 'none';
        existUser.textContent = '';
      }
    })
})
email.addEventListener('keyup',e=>{
  fetch('/uniqueEmail',{
          headers: { 'content-type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({
            email:email.value
          })
    }).then(res=>res.json())
    .then(res=>{
      console.log(res.error,'ttttttttttttttt');
      if (res.error && res.error.errorType=='client') {
        existEmail.style.display = 'block';
        existEmail.textContent = 'This Email has been taken';
        console.log('exists');


      }
      else{
        existEmail.style.display = 'none';
        existEmail.textContent = '';


      }
    })
})
signupSubmit.addEventListener('click',e=>{
e.preventDefault()
if (isUserName(userName.value)&&userName.value.length>2 && isEmail(email.value)&&isPasswordStrong(password.value) &&password.value.length>5 && arePasswordsMatching(cPassword.value)) {
  fetch('/signUp', {
          headers: { 'content-type': 'application/json' },
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            userName:userName.value,
            email:email.value,
            password:password.value,
            cPassword:cPassword.value

          })
    }).then(res=>res.json()).then(res=>{
      if (res.error&& res.error.errorType=='server') {
        window.location='/servererror'

      }
      else if (res.error&& res.error.errorType=='client') {
          errorMsg.textContent = res.error.msg;
      }else{

        window.location='/'
      }

    })
}

})

var isUserName = function(value){
  return RegExp('^[a-zA-Z0-9_]*$').test(value)
};
var isEmail = function(value){
  return RegExp('^.{1,}@.{2,}\..{2,}').test(value)
};

var isPasswordStrong = function(value){
  return value.length === 0 || RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(value)
};

var arePasswordsMatching = function(value){
  return password.value === value
};





const Checker=(element, errorCondition, errorIcon, msg)=> {
  element.addEventListener('blur', function(event) {
    var value = event.target.value;
  if (value.length>0 && errorCondition(value)) {
      errorIcon.style.visibility = 'hidden';
      errorMsg.textContent = '';
    } else if(value.length>0){
      errorIcon.style.visibility = 'visible';
      errorMsg.textContent = msg;
    }
  })
}

Checker(userName,isUserName,userNameIcon,'wrong user name ')
Checker(email,isEmail,emailIcon,'wrong email')
Checker(password,isPasswordStrong,passwordIcon,'weake Password')
Checker(cPassword,arePasswordsMatching,cPasswordIcon,'passqord not match')
