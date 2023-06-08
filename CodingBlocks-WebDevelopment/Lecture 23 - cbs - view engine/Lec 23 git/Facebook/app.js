const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');

const bodyParser = require('body-parser');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/index',(req,res)=>{
    res.render('index',{
        title:"Facebook"
    })
})

// The below code has been commented as it has been shifted to the Router.
// Also, the callback is made async as the process of interacting with the database is time consuming, 
// and hence, we need to wait for it to finish before rendering hbs.
app.use('/posts',require('./routes/posts/posts'));

// app.get('/posts/createpost',(req,res)=>{
//     res.render('createpost');
// })

// app.post('/posts/createpost',async (req,res,next)=>{
//     const {title, imageUrl, caption} = req.body;
//     console.log(title,imageUrl,caption);
//     try{
//         let posts = await Posts.addPost({
//             title,
//             imageUrl,
//             caption,
//             id:uuidv4()
//         })
//         // console.log(JSON.parse(posts));
//         res.render('home',{
//             posts
//         });
//     }
//     catch(err){
//         next();
//     }
// })

// app.get('/posts/deleteitem',async (req,res)=>{
//     const {id} = req.query;
//     try{
//         let posts = await Posts.deletePost(id);
//         res.render('home',{
//             posts
//         });
//     }catch(err){
//         next();
//     }
// })

app.use((req,res)=>{
    res.render('error');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});