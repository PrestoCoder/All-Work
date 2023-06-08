const Posts = require('../../database/scripts/posts');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/createpost',(req,res)=>{
    res.render('createpost');
})

// The callback is made async as the process of interacting with the database is time consuming, 
// and hence, we need to wait for it to finish before rendering hbs.
router.post('/createpost',async (req,res,next)=>{
    const {title, imageUrl, caption} = req.body;
    console.log(title,imageUrl,caption);
    try{
        let posts = await Posts.addPost({
            title,
            imageUrl,
            caption,
            id:uuidv4()
        })
        // console.log(JSON.parse(posts));
        res.render('home',{
            posts
        });
    }
    catch(err){
        next();
    }
})

router.get('/deleteitem',async (req,res)=>{
    const {id} = req.query;
    try{
        let posts = await Posts.deletePost(id);
        res.render('home',{
            posts
        });
    }catch(err){
        next();
    }
})

module.exports = router;