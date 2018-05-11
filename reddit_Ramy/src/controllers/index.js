const express = require('express');
const router = express.Router()
const cookieParser = require('cookie-parser')
const {home} = require('./home');
const {logout} = require('./logout');
const {createPost} = require('./create_post');
const {addComment} = require('./add_comment');
const {verifyAuth} = require('./auth');
const login = require('./login');
const {uniqueUserName} = require('./unique_user_name');
const {votePost} = require('./vote_post');
const {voteComment} = require('./vote_comment');
const {uniqueEmail} = require('./unique_email');
const {profiles} = require('./profiles');
const {postPage} = require('./post_page');
const signup = require('./signup');



router.use(cookieParser())
router.get('/logout',logout)
router.use(verifyAuth)

router.get('/',home)
router.post('/createPost',createPost)
router.get('/login',login.get)
router.post('/login',login.post)
router.get('/signup',signup.get)
router.post('/signup',signup.post)
router.post('/uniqueUserName',uniqueUserName)
router.post('/uniqueEmail',uniqueEmail)
router.get('/vote/post/:postId',votePost)
router.get('/vote/comment/:commentId',voteComment)
router.get('/profile/:profileId',profiles)
router.get('/post/:postId',postPage)
router.post('/comment/post',addComment)
module.exports=router
