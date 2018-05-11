const postsLikesClick=document.getElementsByClassName('postsLikesClick')
let postsLikesClickNodes = Array.prototype.slice.call(postsLikesClick)
postsLikesClickNodes.forEach(node=>{
  console.log(node,'nooooononononon');
  let likesCount =Number(node.textContent.split(' likes')[0])
  node.addEventListener('click',e=>{
    // /vote/post/
    fetch(`/vote/post/${e.target.id}`,{
      headers:{'content-type':'application/json'},
      method:'GET',
      credentials: 'same-origin'
    }).then(res=>res.json()).then(res=>{
       if(res.success&&res.message=='inserted'){
         console.log(res.message);
        node.style.color='green';
        likesCount++
        node.textContent= likesCount+' likes'
      }
      else if (res.success&&res.message=='deleted') {
        console.log(res.message);
        node.style.color='black';
        likesCount--
        node.textContent= likesCount+' likes'
        // node.textContent=`${likesCount--} likes`
      }
    })

  })
})


if (postsLikesClick) {

const paragCount=document.getElementsByClassName('paragCount')
let votesCountNodes = Array.prototype.slice.call(paragCount)
// console.log(votesCount,'idgosgmnsjngmsjgnjusgnujesnguj');
votesCountNodes.forEach(node=>{
  console.log(node);
  let votesCommnetCount =Number(node.textContent.split(' likes')[0])
  node.addEventListener('click',e=>{
    console.log(e.target);
    fetch(`/vote/${e.target.id}`,{
      headers:{'content-type':'application/json'},
      method:'GET',
      credentials: 'same-origin'
    }).then(res=>res.json()).then(res=>{
       if(res.success&&res.message=='inserted'){
         console.log(res.message);
        node.style.color='green';
        votesCommnetCount++
        node.textContent= votesCommnetCount+' likes'
      }
      else if (res.success&&res.message=='deleted') {
        console.log(res.message);
        node.style.color='black';
        votesCommnetCount--
        node.textContent= votesCommnetCount+' likes'
        // node.textContent=`${likesCount--} likes`
      }
    })

  })
})

}

const commentAdd=document.getElementById('commentAdd')
if (commentAdd) {
  console.log(commentAdd);
  commentAdd.addEventListener('keyup',(e)=>{
    console.log('5555555555555');
    console.log(e.target.id);
    if (e.keyCode == 13) {
      const data=JSON.stringify({commentContent:e.target.value})
      // const data={commentContent:}
      console.log(data);
      fetch('/comment/post',{
        headers:{'content-type':'application/json'},
        method:'post',
        body:data,
        credentials: 'same-origin'
      }).then(res=>res.json()).then(res=>window.location=res.redirect)
    }

  })

}

document.querySelector('.new--post').addEventListener('click',()=>{
  document.querySelector('.createPostHome').classList.toggle('hidden');
})
