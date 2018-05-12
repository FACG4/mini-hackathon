// const dbConnect = require('./../db_connect');
// const {uniqueUserQ} = require('./unique_user_q');
// exports.signupQ=(username,hashedPass,email,cb)=>{
//   // check user name
//   uniqueUserQ(username,null,(errorName,statusName)=>{
//     if (errorName) return cb({errType:'database Error (signUP) comes from checking Unique User(NAME)'})
//     else if (statusName) {
//       // check eamil
//           uniqueUserQ(null,email,(errorEmail,statusEmail)=>{
//             if (errorEmail) return cb({errType:'database Error (signUP) comes from checking Unique User(Email)'})
//               else if (statusEmail) {
//                     const sql={
//                       text:'INSERT INTO users (user_name,password,email) values ($1,$2,$3) RETURNING *',
//                       values:[username,hashedPass,email]
//                       }
//                     dbConnect.query(sql,(err,res)=>{
//                       if (err) return cb({errType:'database Error in inserting user to database (signUP)'})
//                       if (res.rows.length>0) return cb(null,res.rows)
//
//                     })
//
//
//               }
//           })
//     }
//   })
//
//
//
// }
