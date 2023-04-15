// var a = 20
// var b = 20
// console.log(a+b)

// var  a =2
// if(a%2==0)
// {
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// how to create anonymous function

//  var add = function(a,b,c)
//    {
//     return a+b+c
//    }
//    console.log(add(10,20,30));
// var compare = (a,b)=>{
//     // return a-b
//     return b-a
// }
// var ary =[100,2,3,4]
// ary.sort(compare)
// console.log(ary)
// console.log("hhello")
// exports.myDateTime = function () {
//     return Date();
// }

// var other = require('./app2')
// console.log(other(20,60));

var users = require('./practice.js')
console.log(users(60,60))

// var other = require('./practice.js')
// console.log(other(5,5))

// var sum = require('./practice')
// console.log(sum(5,7))
// var sum = require('./practice')
// console.log(sum(100,100))

// var http = require('http');
// var dt = require('./practice');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(3456);


// var other = require('./practice.js')
// console.log(other(4,5))

// var other = require('./practice')
// console.log(other(4,6))

// var express = require('express')
// var app = express()



var express = require('express');
var app = express();


app.get('/', function(req, res){
   res.send("Hello World!");
});


app.get('/',function(req,res){
    res.sendFile(__dirname+"/home.html")
})

// app.get('/',function(req,res){
//    res.send('bye goodmorning')
// })

// app.get('/about',function(req,res){
//    res.send('bye goodnight')
// })

// app.listen(3444);



app.get('/',function(req,res){
    res.send("hello")
})

app.get('/aboutus',function(req,res){
    res.send("byee")
})

app.listen(3430)