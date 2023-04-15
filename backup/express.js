const express = require('express');
const app = express();

const router = express.Router();




// get method
// app.get('/',function(req,res)
// {
//     res.sendFile("login page 3333")
// })
// get method

// app.get('/',function(req,res){
//     res.send("homepage")
// })
// app.get('/aboutus',function(req,res){
//     res.send("aboutus")
// })
// ///post method

// app.post('/login',function(req,res){
//     res.send("show data")
// })

// var express = require('express')
// const app = express();


// const router = express.Router();


// app.get('/',function(req,res){
//     res.sendFile(__dirname+"/about.html")
// })



// app.use('/',router)
// app.listen(3456)

// router.get('/', function(req ,res){
//     res.sendFile(__dirname+"/home.html")
// })

// router.get('/aboutus', function(req ,res){
//     res.sendFile(__dirname+"/about.html")
// })

















app.use('/', router);
app.listen(4800)