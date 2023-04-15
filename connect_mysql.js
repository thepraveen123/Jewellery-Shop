// var sql = require('mysql')
// var con = sql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'demo1'
// })
// con.connect(function(error){
//     if(error)throw error;
//     console.log("databse connected")
// })

// con.query('CREATE DATABASE demo1',function(error){
//     if(error)throw error;
//     console.log("database created")
// })   

// var sql ='CREATE TABLE user( id INT AUTO_INCREMENT PRIMARY KEY , customerName VARCHAR(50), contactName VARCHAR(50), address VARCHAR(50), city VARCHAR(50), postalCode VARCHAR (50), country VARCHAR (50))';

// con.query(sql,function(error){
//     if(error) throw error;
//     console.log("table created")
// })


// var sql = 'INSERT INTO user (customerName,contactName,address,city, postalCode,country) VALUES?';
// var VALUES = [
//     ["ashu","aman","janakpuri","delhi","110066","India"],
//     ["binod","john","saket","paris","112299","Uk"],
//     ["raju","rajiv","vikaspuri","delhi","110078","India"],
//     ["micheal","sam","jk-8","texas","110054","America"],
//     ["arjun","suman","m-34","dhaka","110066","Bangladesh"],
//     ["arjun","aman","janakpuri","delhi","110066","India"],
//     ["ashu","aman","janakpuri","delhi","110066","India"],
//     ["raju","rajiv","vikaspuri","delhi","110078","India"],
//     ["raju","rajiv","polind","germany","110987","Europe"],
//     ["raju","rajiv","roland","poland","110094","Europe"],


// ]
// con.query(sql,[VALUES],function(error){
//     if(error) throw error;
//     console.log("entries inserted")
// })

// con.query('SELECT * FROM user',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT customerName, contactName FROM user',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user WHERE customerName="ashu" ',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user ORDER BY country  ',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user LIMIT 5',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user LIMIT 5 OFFSET 2',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('UPDATE user set customerName = "robin" WHERE customerName = "micheal" ',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT DISTINCT customerName FROM user ',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT  customerName FROM user ',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * from user WHERE postalCode = 110066',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * from user WHERE postalCode between 110066 and 110088',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * from user WHERE postalCode between 110066 and 110088',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM USER WHERE customerName LIKE "%n"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM USER WHERE country in ("america","india")',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * from user WHERE city= "delhi" AND country = "India"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })


// con.query('SELECT * from user WHERE city= "delhi" OR country = "India"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })


// con.query('SELECT * from user WHERE NOT country = "INDIA"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * from user ORDER BY customerName ASC , contactName DESC',function(error,result){
//         if(error)throw error;
//         console.log(result)
//     })

// con.query('SELECT * from user WHERE contactName IS null',function(error,result){
//         if(error)throw error;
//         console.log(result)
//     })

// con.query('SELECT * from user WHERE customerName LIKE "raj%"',function(error,result){
//         if(error)throw error;
//         console.log(result)
//     })

// con.query('SELECT * from user WHERE customerName LIKE "_rjun"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// var sql = 'SELECT * from user WHERE city LIKE "[a-i]%"'
// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * from user WHERE country IN ("India","America")',function(error,result){
//         if(error)throw error;
//         console.log(result)
//     })



// var sql ='CREATE TABLE product( id INT AUTO_INCREMENT PRIMARY KEY , productName VARCHAR(50), customerName VARCHAR(50), address VARCHAR(50), city VARCHAR(50), postalCode VARCHAR (50), country VARCHAR (50))';

// con.query(sql,function(error){
//     if(error) throw error;
//     console.log("table created")
// })




// var sql = 'INSERT INTO product (productName,customerName,address,city, postalCode,country) VALUES?';
// var VALUES = [
//     ["mobile","neeraj","palam","delhi","110066","India"],
//     ["shampoo","preeti","dwarka","london","112299","Uk"],
//     ["cycle","kunal","gk","delhi","110078","India"],
//     ["tea","sam","jk-8","texas","110054","America"],
//     ["soap","suman","m-34","dhaka","110066","Bangladesh"],
//     ["tablet","aman","janakpuri","delhi","110066","India"],
//     ["tv","aman","janakpuri","delhi","110064","India"],
//     ["laptop","rajiv","vikaspuri","delhi","110078","India"],
//     ["car","soham","polind","lahore","110987","pakistan"],
//     ["nike","rohan","roland","poland","110094","Europe"],


// ]
// con.query(sql,[VALUES],function(error){
//     if(error) throw error;
//     console.log("entries inserted")
// })


  
// con.query('SELECT * FROM product WHERE ID  BETWEEN 5 AND 8  AND ID NOT IN (1,2)',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })



// var sql = 'SELECT user.customerNAME as customer , product.customerName as product FROM user LEFT JOIN product on user.id = product.id'
// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log(result)
// })


// var sql = 'ALTER TABLE PRODUCT ADD fav_product VARCHAR (50)'
// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT fav_product from product',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// var sql = 'ALTER TABLE user ADD user_product VARCHAR (50)'
// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log("column created")
// })


// var sql = 'INSERT INTO user(user_product) VALUES?'
// var VALUES = [
//     ["SHAMPOO"],
//     ["OIL"],
//     ["BISCUIT"],
//     ["CAR"],
//     ["PHONE"],
//     ["BLANKET"],
//     ["PERFUME"],
//     ["REMOTE"],
//     ["TV"],
//     ["TABLET"]
// ]
// con.query(sql,[VALUES],function(error,result){
//     if(error) throw error;
//     console.log("details inserted")
// })



// var sql = 'SELECT user.user_product as userproduct, product.fav_product as favproduct FROM user JOIN product on user.user_product = product.fav_product'

// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// var sql ='ALTER TABLE product DROP fav_product'
// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log("column deleted")
// })

// var sql = 'ALTER TABLE user ADD user_product VARCHAR (50)'
// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log("column created")
// })


// var sql = 'INSERT INTO user(user_product) VALUES?'
// var VALUES = [
//     ["SHAMPOO"],
//     ["OIL"],
//     ["BISCUIT"],
//     ["CAR"],
//     ["PHONE"],
 
// ]
// con.query(sql,[VALUES],function(error,result){
//     if(error) throw error;
//     console.log("details inserted")
// })

// var sql = 'SELECT user.address as address, product.address as custmeradd FROM USER JOIN product ON user.postalCode = product.postalCode'
// con.query(sql,function(error,result){
//     if(error) throw error;
//     console.log(result)
// })


// var sql = 'SELECT user.address as address, product.address as custmeradd FROM USER RIGHT JOIN product ON user.postalCode = product.postalCode ORDER BY address'
// con.query(sql,function(error,result){
//     if(error) throw error;
//     console.log(result)
// })




// con.query('select * from user,product',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })



// con.query('SELECT * FROM user',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM product',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })


// var sql = 'SELECT user.country as country, product.productName as ciy FROM USER RIGHT JOIN PRODUCT ON user.id = product.id'
// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log(result)
// })    

// var mysql = require('mysql')
// var con = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'demo1'
// })
// con.connect(function(error){
//     if(error)throw error;
//     console.log("database connected")
// })

// con.query('DROP DATABASE login',function(error,result){
//     if(error)throw error;
//     console.log("database deleted")
// })

// con.query('SELECT * FROM user',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from user where country ="INDIA"',function(error,result){
//     if(error) throw error;
//     console.log(result)
// }

// con.query('SELECT * FROM user where country LIKE "I%A" ',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user where country LIKE "%nd%" ',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user where country LIKE "%A" ',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user where city like "D%i"',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user where country LIKE "_n%" ',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user where country LIKE "_m%" ',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('SELECT customerName, city from user',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from user ORDER BY customerName DESC',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from user ORDER BY customerName DESC, ADDRESS ASC',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM USER where customerName is null',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('UPDATE user SET postalCode="110067" where postalCode = "110066"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })
// con.query('SELECT * FROM USER where postalCode="110067"',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('select * from user WHERE city like "[a-z]%"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user where city IN("DELHI","TEXAS")',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT * FROM user where id between 1 and 4 and id not in (2,3)',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT min(id) from user',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT max(id) from user',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT COUNT(id) FROM user',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('SELECT COUNT(address) FROM user',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('SELECT sum(id) FROM user',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('SELECT avg(id) FROM user',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })



var mysql = require('mysql')
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'record'
})
con.connect(function(error){
    if(error)throw error;
    console.log("connected!")
})

// con.query('create database record',function(error,result){
//     if(error)throw error;
//     console.log("database created")
// })

// var sql = 'CREATE TABLE registration(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), class VARCHAR(255), age VARCHAR(255),location VARCHAR(255))'

// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log("table created")
// })

// var sql ='INSERT INTO registration (name,class,age,location) VALUES ? '
// var VALUES= [
//     ["ashneer","3","10","delhi"],
//     ["binod","5","12","mumbai"],
//     ["rashmi","9","14","pune"],
//     ["preetam","10","15","indore"],
//     ["riya","4","11","kalkaji"],
// ]
// con.query(sql,[VALUES],function(error,result){
//     if(error) throw error;
//     console.log("details inserted")
// })

// con.query('SELECT * FROM registration',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration WHERE location = "indore"',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('select * from registration where location like "d%"',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })

// con.query('select * from registration order by name',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration order by name DESC , age ASC',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

//  con.query('update registration set age ="20" where age = "10"',function(error,result){
//     if(error)throw error;
//     console.log(result)
//  })
// con.query('select age from registration',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select name from registration limit 2 OFFSET 3',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select distinct name from registration',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where age = 20',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where age > 20',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where age < 20',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where age <= 20',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where age != 20',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where age between 10 and 18',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where age in (11,15)',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where name ="preetam"  and class = "10" ',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where not name = "preetam" ',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from registration where name like "p%"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })


// con.query('select * from registration where name like "%m"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })


// con.query('select * from registration where name like "p%m"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })


// con.query('select * from registration where name like "_r%"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })


// con.query('select * from registration where name like "a_%"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })


// con.query('select * from registration where name not like "p%"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select max(id) from registration',function(error,result){
//     if (error)throw error;
//     console.log(result)
// })

// con.query('select max(age) from registration',function(error,result){
//     if (error)throw error;
//     console.log(result)
// })

// con.query('select min(age) from registration',function(error,result){
//     if (error)throw error;
//     console.log(result)
// })

// con.query('select sum(age) from registration',function(error,result){
//     if (error)throw error;
//     console.log(result)
// })

// con.query('select avg(age) from registration',function(error,result){
//     if (error)throw error;
//     console.log(result)
// })
// con.query('select count(age) from registration',function(error,result){
//     if (error)throw error;
//     console.log(result)
// })


// var sql = 'select user.customerName as customer ,user.address as address , user.city as city, product.productName as product from user join product on user.id = product.id'

// con.query(sql,function(error,result){
//     if(error) throw error;
//     console.log(result)
// })


// con.query('select count(name) from registration',function(error,result){
//     if(error) throw error;
//     console.log(result)
// })


var mysql = require('mysql')
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'teachers'
})
con.connect(function(error){
    if(error)throw error;
    console.log("connectd")
})
// con.query('CREATE DATABASE teachers',function(error,result){
//     if(error) throw error;
//     console.log("database created")
// })
// var sql = 'create table list (ID INT AUTO_INCREMENT PRIMARY KEY, name varchar(255), age varchar (255), emp_id varchar(255), location varchar (255))'



// con.query(sql,function(error,result){
//     if(error)throw error;
//     console.log("table created")
// })

// var sql = 'INSERT INTO LIST (name,age,emp_id,location) values?'
// var values = [
//     ['neelam','25','100','dwarka'],
//     ['anita','28','102','palam'],
//     ['shruti','24','104','janakpuri'],
//     ['babita','20','106','palam']
// ]
// con.query(sql,[values],function(error,result){
//     if(error) throw error;
// console.log("details inserted")
// })
// con.query('select * from list',function(error,result){
//     if(error) throw error;
//     console.log(result[1].name)
// })
// con.query('select * from list where location = "palam"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('SELECT name,location from list',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from list where name like "s%"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })
// con.query('SELECT * FROM LIST  order by name',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })
// con.query('SELECT * FROM LIST  order by name DESC',function(error,result){
//     if(error)throw error;
//     console.log(result)
// // })
// con.query('SELECT * FROM LIST  order by name DESC , LOCATION ASC',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('delete from list where name = "shruti"',function(error,result){
//     if(error)throw error;
//     console.log(error)
// })
// con.query('select name from list',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('update list set location="saket" where location ="palam"',function(error,result){
//     if
//     (error)throw error;
//     console.log(result)
// })
// con.query('select * from list limit 3',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from list  limit 2,2',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })
// con.query('select distinct location from list',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from list where age > 25',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from list where age < 25',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })
// con.query('select * from list where age = 25',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })
// con.query('select * from list where age between 25 and 30',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })
// con.query('select * from list where location in("palam","saket")',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })
// con.query('select * from list where location ="saket" and age ="20"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })
// con.query('select * from list where not location = "saket"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from list where name like "a%"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from list where name like "%a"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from list where name like "a%a"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from list where location like "%ak%"',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })

// con.query('select * from list where age between 20 and 25 and not age in (23,35,26)',function(error,result){
//     if(error)throw error;
//     console.log(result)
// })