const express =require("express")
var bodyParser=require("body-parser")
var cors=require("cors")
const joi=require("joi")
const app=express()
var schemas=require("./schema");

app.use(bodyParser.json());
const posts =[
    {
        id:1,
        username:"Sudha",
        title: "post 1"
    },
    {
        id:2,
        username :"Sd",
        title: "post 2"
    }
]

app.get("/posts",(req,res) =>{
    console.log(req.query);
    res.json(posts)
})

app.post("/posts",validate('body',schemas.schemas), (req,res)=>
{
    console.log(req.body);
    posts.push(req.body);
    res.json(posts)
})

app.delete("/posts",(req,res)=>
{
    console.log(req.body);
    var i=0;
    var l = posts.length;
    var index = -1;
    while (i<l){
        post = posts[i]
        if( req.body.username === post.username && req.body.id === post.id && req.body.title === post.title) {
            index = i;
            break;
         }
         i+=1;
    }
        
    console.log(index);
    if(index!==-1){

        posts.splice(index,1);
    }
    res.json(posts);
}) 

app.put("/posts",(req,res)=>{
    console.log(req.query);
    var i=0;
    var l = posts.length;
    var index = -1;
    while (i<l){
        post = posts[i]
        if(req.query.id == post.id) {
            index = i;
            break;
         }
         i+=1;
    }
    posts[index].username=req.body.username;
    res.json(posts);
})

function validate(p,schema,next){
    const {error} = Joi.validate(p, schema);
    if(error){
      res.json(error.details);
    }
    next();
  }

app.listen(3000)

