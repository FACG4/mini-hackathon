const test = require('tape');
const {getTable} = require('./../queries/get_table');
const {addCommentQ} = require('./../queries/add_comment_q');
const {addUserQ} = require('./../queries/insert_user_q');
const {checkLogin} = require('./../queries/check_login_q');
const {uniqueUserQ} = require('./../queries/unique_user_q');
const {toggleVoteQ} = require('./../queries/toggle_vote_q');
const {addPostQ} = require('./../queries/add_post_q');
const {runDbBuild} = require('./../build_db.js');

//
// test('testing on get table length users ',t=>{
// runDbBuild((err,result)=>{
//   getTable('users',(error,result)=>{
//       if (error) throw new Error(error)
//       t.deepEqual(result.length,7,'MUST RETURN 7')
//       t.end()
//   })
// })
// })
//
// test('testing on get table first row in users',t=>{
// runDbBuild((err,result)=>{
//   getTable('users',(error,result)=>{
//       if (error) throw new Error(error)
//       t.deepEqual(result[0].id,1,'MUST RETURN 1')
//       t.deepEqual(result[0].user_name,'ramyalshurafa','MUST RETURN ramyalshurafa ')
//       t.end()
//   })
// })
// })
//
//
//
// test('testing on get table first row in posts ',t=>{
// runDbBuild((err,result)=>{
//   getTable('posts',(error,result)=>{
//       if (error) throw new Error(error)
//       t.deepEqual(result[0].id,1,'MUST RETURN 1')
//       t.deepEqual(result[0].user_id,1,'MUST RETURN 1 ')
//       t.deepEqual(result[0].post_title,'HAPPY BIRTHDAY GIF','MUST RETURN HAPPY BIRTHDAY GIF ')
//       t.end()
//   })
// })
// })
//
//
//
// test('testing on get table votes_post',t=>{
// runDbBuild((err,result)=>{
//   getTable('votes_post',(error,result)=>{
//       if (error) throw new Error(error)
//       t.deepEqual(result.length,5,'MUST RETURN 5')
//       t.deepEqual(result[0].user_id,1,'MUST RETURN 1 ')
//       t.deepEqual(result[0].post_id,2,'MUST RETURN 2 ')
//       t.end()
//   })
// })
// })
//
//
//
// test('testing inserting comments on posts',t=>{
// runDbBuild((err,result)=>{
//   addCommentQ(1,'I LIKED THIS POST !',1,null,(err,res)=>{
//     if (err){
//       throw new Error(err)
//     }
//     t.deepEqual(res.length,1,'MUST RETURN 1')
//     t.deepEqual(res[0].user_id,1,'MUST RETURN 1')
//     getTable('comments',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,10,'MUST RETURN 10')
//         t.end()
//     })
//   })
// })
//
//
// })
// test('testing inserting comments on posts',t=>{
//   let error=false
// runDbBuild((err,result)=>{
//   addCommentQ(1,'I LIKED THIS POST !',null,null,(err,res)=>{
//     if (err)  error=true
//     t.deepEqual(error,true,'MUST RETURN error= true')
//     getTable('comments',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,9,'MUST RETURN 9')
//         t.end()
//     })
//   })
// })
// })
//
//
//
// test('testing inserting comments on posts',t=>{
//   let error=false
// runDbBuild((err,result)=>{
//   addCommentQ(1,'I LIKED THIS POST !',1,1,(err,res)=>{
//     if (err)  error=true
//     t.deepEqual(error,true,'MUST RETURN error= true')
//     getTable('comments',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,9,'MUST RETURN 9')
//         t.end()
//     })
//   })
// })
// })
//
//
//
// test('testing inserting users (short name)',t=>{
//   let error=false
// runDbBuild((err,result)=>{
//   addUserQ('md','5484448455','hassan@ahmed.com',(err,res)=>{
//     if (err)  error=true
//     t.deepEqual(error,true,'MUST RETURN error= true')
//     getTable('users',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,7,'MUST RETURN 7 (short name)')
//         t.end()
//     })
//   })
// })
// })
//
//
//
// test('testing inserting users (null password)',t=>{
//   let error=false
// runDbBuild((err,result)=>{
//   addUserQ('Ahmed',null,'hassan@ahmed.com',(err,res)=>{
//     if (err)  error=true
//     t.deepEqual(error,true,'MUST RETURN error= true')
//     getTable('users',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,7,'MUST RETURN 7 (null password)')
//         t.end()
//     })
//   })
// })
// })
//
//
//
// test('testing inserting users (null email)',t=>{
//   let error=false
// runDbBuild((err,result)=>{
//   addUserQ('Ahmed','5484448455',null,(err,res)=>{
//     if (err)  error=true
//     t.deepEqual(error,true,'MUST RETURN error= true')
//     getTable('users',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,7,'MUST RETURN 7 (null eamil)')
//         t.end()
//     })
//   })
// })
// })
//
//
//
// test('testing inserting users (long user name)',t=>{
//   let error=false
// runDbBuild((err,result)=>{
//   addUserQ('AhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmedAhmed','5484448455','hassan@ahmed.com',(err,res)=>{
//     if (err)  error=true
//     t.deepEqual(error,true,'MUST RETURN error= true')
//     getTable('users',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,7,'MUST RETURN 7 (long user name)')
//         t.end()
//     })
//   })
// })
// })
//
//
//
// test('testing on check login ',t=>{
// runDbBuild((err,result)=>{
//   checkLogin('ramyalshurafa','123456789',(err,res)=>{
//     if (err){
//       throw new Error(err)
//     }
//     t.deepEqual(res.length,1,'MUST RETURN 1 ')
//     t.deepEqual(res[0].id,1,'MUST RETURN 1 ')
//     t.deepEqual(res[0].user_name,'ramyalshurafa','MUST RETURN ramyalshurafa ')
//     t.deepEqual(res[0].email,'ramyshurafa@hotmail.com','MUST RETURN ramyshurafa@hotmail.com ')
//     t.end()
//   })
// })
// })
//
//
// test('testing on check login with wrong username',t=>{
// runDbBuild((err,result)=>{
//   checkLogin('no name','123456789',(err,res)=>{
//     if (err){
//       throw new Error(err)
//     }
//     t.deepEqual(res,null,'MUST RETURN null ')
//     t.end()
//   })
// })
// })
//
//
// // ************************************************************
// // **************   UNIQUE USER FUNCTION    *******************
// // ************************************************************
//
// test('testing on check uniqe user with exist (username)',t=>{
// runDbBuild((err,result)=>{
//   uniqueUserQ('ramyalshurafa',null,(err,res)=>{
//         if (err){
//           throw new Error(err)
//         }
//     t.deepEqual(res,false,'MUST RETURN false that mean user is exist ')
//     t.end()
//   })
// })
// })
//
// test('testing on check uniqe user with NOT exist (username)',t=>{
// runDbBuild((err,result)=>{
//   uniqueUserQ('wrong name',null,(err,res)=>{
//         if (err){
//           throw new Error(err)
//         }
//     t.deepEqual(res,true,'MUST RETURN true that mean user is NOT exist ')
//     t.end()
//   })
// })
// })
//
//
//
// test('testing on check uniqe user with uppercase (username)',t=>{
// runDbBuild((err,result)=>{
//   uniqueUserQ('ramyalshurafa',null,(err,res)=>{
//         if (err){
//           throw new Error(err)
//         }
//     t.deepEqual(res,false,'MUST RETURN false that mean username is exist ')
//     t.end()
//   })
// })
// })
//
//
//
// test('testing on check uniqe user with exist (email)',t=>{
// runDbBuild((err,result)=>{
//   uniqueUserQ(null,'ramyshurafa@hotmail.com',(err,res)=>{
//         if (err){
//           throw new Error(err)
//         }
//     t.deepEqual(res,false,'MUST RETURN false that mean email is exist ')
//     t.end()
//   })
// })
// })
//
//
//
// test('testing on check uniqe user with NOT exist (email)',t=>{
// runDbBuild((err,result)=>{
//   uniqueUserQ(null,'wrong email',(err,res)=>{
//         if (err){
//           throw new Error(err)
//         }
//     t.deepEqual(res,true,'MUST RETURN true that mean email is NOT exist ')
//     t.end()
//   })
// })
// })
//
//
//
// test('testing on check uniqe user with  (userName) && (email)',t=>{
//   let err = false
// runDbBuild((err,result)=>{
//   uniqueUserQ('ramyshurafa','ramyshurafa@hotmail.com',(err,res)=>{
//         if (err) err = true
//     t.deepEqual(err,true,'MUST RETURN err= true that mean we pass wrong arguments  ')
//     t.end()
//   })
// })
// })
//
// test('testing on check uniqe user with  NULL (userName) && NULL(email)',t=>{
//   let err = false
// runDbBuild((err,result)=>{
//   uniqueUserQ(null,null,(err,res)=>{
//         if (err) err = true
//     t.deepEqual(err,true,'MUST RETURN err= true that mean we pass wrong arguments  ')
//     t.end()
//   })
// })
// })
//
// test('testing on check uniqe user with  NULL (userName) && NULL(email)',t=>{
//   let err = false
// runDbBuild((err,result)=>{
//   uniqueUserQ(null,null,(err,res)=>{
//         if (err) err = true
//     t.deepEqual(err,true,'MUST RETURN err= true that mean we pass wrong arguments  ')
//     t.end()
//   })
// })
// })
//
//
//
// // *******************************************************
// // **************     toggleVoteQ      *******************
// // *******************************************************
//
//
// test('testing for toggle votes insert new (votes_post)',t=>{
// runDbBuild((err,result)=>{
//   toggleVoteQ('post',1,2,(err,res)=>{
//     t.deepEqual(res[0].post_id,1,'MUST RETURN 2')
//     t.deepEqual(res[0].user_id,2,'MUST RETURN 2')
//     getTable('votes_post',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,6,'MUST RETURN 6 Insert into votes_post')
//         t.end()
//     })
//   })
// })
// })


// test('testing for toggle votes delete (votes_post)',t=>{
// runDbBuild((err,result)=>{
//   toggleVoteQ('post',2,1,(err,res)=>{
//     t.deepEqual(res.length,0,'MUST RETURN 2')
//     getTable('votes_post',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,4,'MUST RETURN 4 Insert into votes_post')
//         t.end()
//     })
//   })
// })
// })
//
//
// test('testing for toggle votes delete (comment_post)',t=>{
// runDbBuild((err,result)=>{
//   toggleVoteQ('comment',1,2,(err,res)=>{
//     t.deepEqual(res[0].comment_id,1,'MUST RETURN 1')
//     t.deepEqual(res[0].user_id,2,'MUST RETURN 2')
//     getTable('votes_post',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,5,'MUST RETURN  5 Insert into votes_comment')
//         t.end()
//     })
//   })
// })
// })

//
// test('testing for toggle votes delete (comment_post)',t=>{
// runDbBuild((err,result)=>{
//   toggleVoteQ('comment',2,1,(err,res)=>{
//     t.deepEqual(res.length,0,'MUST RETURN 0')
//     getTable('votes_comment',(error,result)=>{
//         if (error) throw new Error(error)
//         t.deepEqual(result.length,3,'MUST RETURN  3 delete  votes_comment')
//         t.end()
//     })
//   })
// })
// })



// *******************************************************
// **************     addPostQ      *******************
// *******************************************************



test('testing for add posts',t=>{
runDbBuild((err,result)=>{
  addPostQ(1,'Post title','Post content','www.img.com.jpg',(err,res)=>{
    t.deepEqual(res[0].user_id,1,'MUST RETURN 1')
    t.deepEqual(res[0].post_title,'Post title','MUST RETURN Post title')
    t.deepEqual(res[0].post_content,'Post content','MUST RETURN Post content')
    t.deepEqual(res[0].img_url,'www.img.com.jpg','MUST RETURN www.img.com.jpg')
    getTable('posts',(error,result)=>{
        if (error) throw new Error(error)
        t.deepEqual(result.length,5,'MUST RETURN length of the posts table= 5')
        t.end()
    })
  })
})
})


test('testing for add posts',t=>{
runDbBuild((err,result)=>{
  let error=false
  addPostQ(null,'Post title','Post content','www.img.com.jpg',(err,res)=>{
    if (err) error=true
    t.deepEqual(error,true,'MUST RETURN 1')

    getTable('posts',(error,result)=>{
        if (error) throw new Error(error)
        t.deepEqual(result.length,4,'MUST RETURN length of the posts table= 4')
        t.end()
    })
  })
})
})
