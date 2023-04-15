// var http = require('http')
// var fs = require('fs')
// http.createServer(function(req,res)
// {
// res.writeHead(200,{'content-Type':'text/html'});
// fs.readFile ('test.html', (err, data) => {
//     if (err) throw err;
//     res.write(data);
//   });
// }).listen(3330)

// creating a server over http by http module with readwrite

// var http = require('http');
// http.createServer(function(req,res){
// res.writeHead(200,{'content-type':"text/html"})
// res.write("<h3>hello how are you</h3>")
// res.write("<input type='text'>")
// res.end()
// }).listen(3222)

// var http =require ('http');
// var fs = require('fs')
// http.createServer(function(req,res){
// res.writeHead(200,{'content-type':"text/html"})
// fs.readFile('test.html',(err,data)=>{
// 	if(err)throw err;
// 	res.write(data);
// });
// }).listen(3333)


var users = function(a,b)
{
	return(a+b)
}
module.exports=users;

// var fs = require('fs');
// fs.open('test2.html','w',function(err){
// 	console.log("new file saved");
// })

// var fs = require('fs');
// fs.appendFile('test.html','goodbye again',function(err){
// 	console.log("append done")
// })


// var fs = require('fs')
// fs.writeFile('test2.html',"html done",function(err){
// 	console.log("done changes")
// })

// var fs = require('fs')
// fs.appendFile('test2.html',"done again",function(err){
// 	console.log("done done")
// })

// var fs = require('fs')
// fs.rename('test2.html',"test55.html",function(err){
// 	console.log("donedanadan")
// })

// var fs = require('fs')
// fs.unlink('test55.html',function(err){
// 	console.log("done")
// })

// exports.myDateTime = function () {
//     return Date();
//   };

// var http = require('http'); // creatng a var name http and require incule external module name hhtp

// http.createServer(function(req,res) // creating method to create http server on computer
// {
// res.writeHead(200,{'content-type':"text/html"});
// res.write("<h4>this is heading 4</h4>");
// res.write('<input type = "text" >');
// res.end();
// }).listen(3449)

// var http = require('http');
// http.createServer(function(req,res){
// res.writeHead(200,{'content-type':"text/html"})
// res.write("<h3>hello how are you</h3>")
// res.write("<input type='text'>")
// res.end()
// }).listen(3222)

// var http = require('http')
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':"text/html"});
//     res.write('<h3>hello world</h3>');
//     res.write('<input type = "text"/>');
//     res.end()
// }).listen(3234)

// var other = function(a,b){
//     return a+b
// }
// module.exports=other




// var http = require('http')
// var fs = require('fs')
// http.createServer(function(req,res)
// {
//     res.writeHead(200,{'content-type':"text/html"});
//     fs.readFile('test.html',(err,data) => {
//         if(err) throw err;
//         res.write(data);
//     });
// }).listen(3458)

// var fs = require('fs')
// fs.unlink('live.html',function(err){
//     console.log("done")
// })
// var express = require('express')
// var app = express();

// app.get('/',function(req,res){
// res.send('hi')
// })

// app.get('/aboutus',function(req,res){
//     res.send("bye")
// })
// app.listen(3123)

// 

// var http = require('http')
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':"text/html"})
//     res.write("<h2>goodmorning</h2>");
//     res.write('<input type = "text"/>');
//     res.end();
// }).listen(3444)

// var http = require('http')
// var fs = require('fs')
// http.createServer(function(req,res){
//    res.writeHead(200,{'content-type':"text/html"})
//    fs.readFile('test7.html',(err,data)=>{
//     if(err)throw err
//     res.write(data);
//    }) ;
// }).listen(3680)

// const { response } = require('express');
// var nodemailer = require('nodemailer')
// var transport = nodemailer.createTransport({
//     service:'gmail',
//     auth:
//     {
//         user:'praveenkumaar730@gmail.com',
//         pass:'lxmuquwarrgzmetx'
//     }
// });
// var mailoptions = {
//     from:'praveenkumaar730@gmail.com',
//     to:'praveenkumaar730@gmail.com',
//     subject:'hjh',
//     text:'dkdkshshd'
// }
// transport.sendMail(mailoptions,function(info,err){
//     if(err)
//     {
//         console.log(error)
//     }
//     else{
//         console.log('sent',info,response)
//     }
// })

// var http = require('http')
// http.createServer(function(req,res)
// {
//     res.write("<h1>helllo</h1>")
//     res.end()
// }).listen(3456)

// var http = require('http');
// http.createServer(function(req,res){
// res.writeHead(200,{'content-type':"text/html"})
// res.write("<h3>hello how are you</h3>")
// res.write("<input type='text'>")
// res.end()
// }).listen(3222)

// var http=require('http')
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':"text/html"})
//     res.write("<h3>goodnight</h3>")
//     res.end()
// }).listen(3456)

// var http = require('http')
// var fs = require('fs')
// http.createServer(function(req,res){
//     fs.readFile('test7.html',(err,data)=>{
//         if(err) throw err;
//         res.write(data)
//     })
// }).listen(3230)


// var http = require('http')
// var fs = require('fs')
// http.createServer(function(req,res){
//    res.writeHead(200,{'content-type':"text/html"})
//    fs.readFile('test7.html',(err,data)=>{
//     if(err)throw err
//     res.write(data);
//    }) ;
// }).listen(3680)

// const { response } = require('express');
// var nodemailer= require('nodemailer');
// var transporT=nodemailer.createTransport({
//    service:'gmail',
//    auth:
//    {
//       user:'praveenkumaar730@gmail.com',
//       pass:'oirqxhsuqrwmmjij'
//    }
// });
// var mailoptions = {
//    from:"praveenkumaar730@gmail.com",
//    to:'praveenkumaar730@gmail.com',
//    subject:'rrgarding cash',
//    text:"received"
// }
// transporT.sendMail(mailoptions,function(err,info){
//    if(error){
//       console.log(error)
//    }
//    else{
//       console.log("email has been sent",info,response)
//    }
// })

var nodeMailer= require('nodemailer');
var  tarnsport = nodeMailer.createTransport({
    service:'gmail',
    auth:
    {
        user:'praveenkumaar730@gmail.com',
        pass:'oirqxhsuqrwmmjij'
    }
});
var mailoptions = {
    from:'praveenkumaar730@gmail.com',
    
    
    to:'praveenkumaar730@gmail.com',
    subject:'nodemail to you',
    text:"hi brother"
}
tarnsport.sendMail(mailoptions,function(err,info){
    if(error)
    {
        console.log(error)
    }
    else{
        console.log("email has been sent to you",info,response)
    }
})

