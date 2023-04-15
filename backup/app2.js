	///////////// creating server over http ////////
	
	// var http = require ('http');
	// http.createServer(function(req,res)
	// {
	//     res.write('<h1>hello node js</h1>');
	//     res.write('hello world');
	//     res.end();
	// }).listen(3900)

//////////////////////////////////////////////////////

// Importing 'http' module
// const http = require('http');

// Setting Port Number as 80
// const port = 80;
/////////////////////////////////////////////////////////

     
                  // Example for http module

// var http = require('http')
// http.createServer(function(req,res)
// {
//     // res.write('<h6>this is my first server task</h6>');
//     res.write('<h1>hello node js</h1>');// only hello nodejs will be print
//     res.end(); // it will end writable here
//     res.write('<h1> this second heading </h1>'); // no respect for this writable

// }).listen(3458)

                  ////////   FAT ARROW FUNCTION    

// let hello =()=>console.log('hello world');   ----> fat arroow function
// hello()

// let welcome = (name,age)=>
// {
// 	return `hello my name is ${name},age is ${age}` ---- fat arrow with parameter
// }
// console.log(welcome("ram",23));


       ////////////////////// EXPORTING MODULE  

// var other = function(a,b)
// {
// 	return a+b
// }
// module.exports=other;


            ////////////GETTING FORM FROM SERVER

// var http=require('http')
// var inputs=`<h1> form</h1>
// <input type="text"/><br>
// <br><input type="text"/>
// <br><br><input type="text"/>`

// http.createServer(function(req,res){
// res.writeHead(200,{'content-type':"text/html"});

// res.write('<h1>hello</h1>')
// res.write('<input type="text"/>');

// res.write(inputs)
// res.end();
// }).listen(3004)

   ////////////////////////// READING FILE FROM SERVER 

//  


                       //////////// OPEN NEW EMPTY FILE

// var fs = require('fs');

// 	fs.open('test7.html', 'w', function (err,file) {
		

// 		console.log("saved")
// 	})

////////////////////////////////// APPEND FILE -IT WILL ADD CONTENT EVRYTIME WE DO CTRL+S

// var fs = require('fs');

// 	fs.appendFile('test1.html', 'hello world again', function (err) {
		
// 		console.log("saved")
// 	})

/////////////////////////////////// CHANGE CONTENT IN EXISTING FILE AND REMOVE OLD CONTENT

// var fs = require('fs');

// 	fs.writeFile('test2.html', 'hello world again', function (err) {
		
// 		console.log("saved again");
// 	})


               //////////////////////// RENAME FILE NAME

// var fs = require('fs');

// 	fs.rename('test1.html', 'test2.html', function (err) {
		
	
// 		console.log("saved again");
// 	})

////////////////////////////////////// UNLINK FILE(DELETE FILE)

// var fs = require('fs');

// 	fs.unlink('test1.html', function (err) {
		
// 		console.log("saved again");
// 	})


var other = require