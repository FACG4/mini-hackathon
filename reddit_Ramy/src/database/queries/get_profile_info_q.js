const dbConnect = require('./../db_connect');
exports.getProfileInfoQ=(profileId,cb)=>{
const  sql={text:'SELECT id,user_name ,img_profile from users where id=$1',
    values:[profileId]
    }
  dbConnect.query(sql,(err,result)=>{
    // console.log(result.rows.,'pppppppppppppppppppppp');
    if (err) return cb(err)
    return cb(null,result.rows[0])
  })
}
