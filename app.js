let express = require("express"); // requiring express module
const app = express();            // stored module in variable
var cookieParser= require("cookie-Parser");
var session = require("express-session");
// const multer  = require('multer')

const bodyParser = require('body-parser')    // requiring 
const { default: mongoose } = require("mongoose");
const usermodelnew = require("./model/contactform.js");
// const cookieParser = require("cookie-parser");

mongoose.set('strictQuery', false)
app.use(bodyParser.urlencoded({ extended: true }));


  

//   const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.originalname + '-' + uniqueSuffix)
//     }
//   })


/* defined filter */
// const fileFilter = (req, file, cb) => {
//     if (
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg" ||
//       file.mimetype === "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false); // if validation failed then generate error
//     }
//   };
  
//   const upload = multer({ storage:storage,fileFilter: fileFilter});


// const upload = multer({ storage:storage,}).single('image')
 
  

// session and cookies starts
app.use(cookieParser());
app.use(
    session({
        key:"user_id",
        secret:"somerandomstuffs",
        resave:false,
        saveUninitialized:false,
        cookie:{
            expires:600000, // expires in 10 minutes
        }
    }));

app.use((req,res,next) => {
if(req.cookies.user_id  && !req.session.user){

    res.clearCookie("user_id")
 }
next();
});
//middleware function to check for logged-in user
var sessionChecker =(req, res,next) => {
    if(req.session.user && req.cookies.user_id){
     res.redirect('/dashboard')
    }
    else{
        next();
    }}


// const mongoose =require('mongoose')
const router = express.Router();  // requiring router

app.set('view engine', 'ejs');   //  to import ejs,we use this

app.use(express.static('public'));  // to show file like images/css/js




let userModel = require('./model/signup.js');    // importing here 
let userModelproduct = require('./model/addproduct.js'); // importing here
   
let userModelnew = require('./model/contactform.js');  // importing here 
let userModelvisit = require('./model/user_visit.js')  // importing here 

let usersubscribed = require('./model/subscribed_user') // importing here
// let productdata = require('./model/product_detail').






router.get('/', function (req, res) {
    res.render('home')
})


router.get('/contact_form',function(req,res){
    res.render('contact_form')
})



router.get('/about', function (req, res) {
    res.render('about')
})

router.get('/signupform', sessionChecker, function (req, res) {
    res.render('signupform')
})


////////////SIGNUP API STARTS////////////////////////////

router.post('/signup', (req, res) => {

    var signup1 = new userModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        address: req.body.address,
        addresss: req.body.addresss,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip

    });

    signup1.save().then(() => {
        console.log('saved');
        res.redirect('/signupform')
    })
        .catch((error) => {
            console.log(error)
            res.redirect('/signupform')
        })

});
////////////SIGNUP API ENDS////////////////////////////

//////////// CUSTOMER FORM API STARTS //////////////

router.post('/contact_customer', (req, res) => {

    var query = new userModelnew({
       
        email: req.body.email,
        mobile: req.body.mobile,
        select: req.body.select,
        textarea: req.body.textarea


    });

    query.save().then(() => {
        console.log('saved');
        res.redirect('/contact_form')
    })
        .catch((error) => {
            console.log(error)
            res.redirect('/contact_form')
        })

});
//////////// CUSTOMER FORM API ENDS//////////////


/////////////// customer visits api starts /////////////////////////////////////


router.post('/visit',(req,res)=>{
    var visit= new userModelvisit({
        emailnew:  req.body.emailnew,
        phonenew: req.body.phonenew,
        querynew: req.body.querynew
    });

    visit.save().then(()=>{
        console.log('saved')
        res.redirect('/')
    })
    .catch((error)=>{
        console.log(error)
        res.redirect('/about')
    })
});


/////////////// customer visits api  ends /////////////////////////////////////

//////////// ADD PRODUCT API STARTS //////////////


router.post('/addproducts', (req, res) => {
    
    var add = new userModelproduct({
      
        p_name: req.body.p_name,
        p_price: req.body.p_price,
        p_discount: req.body.p_discount,
        p_description: req.body.p_description,

    });

    add.save().then(() => {
        console.log('saved');
        res.redirect('/dashboard')
    })
        .catch((error) => {
            console.log(error)
            res.redirect('/add_product')
        })

});
//////////// ADD PRODUCT API ENDS //////////////


// ///////// subscribed api starts ///


router.post('/subscribed',(req,res)=>{
    var subscriber = new usersubscribed({
        subscribed:req.body.subscribed
    });

    subscriber.save().then(()=>{
        console.log('saved data')
        res.redirect('/')
    })
    .catch((error)=>{
        console.log(error)
        res.redirect('/gallery')
    })

})



//   //// subscribed api ends


////////////////////////////// LOGIN POST API STARTS  /////////////////////////



router.post('/login', async (req, res) => {
    var email = req.body.email,
    password = req.body.password;

    try {
        var user = await userModel.findOne({ email: email }).exec();
   
        if (!user) {
            res.redirect('/signupform'); // if not find then will go to signup page again
        }
        user.comparePassword(password,(error,match)=>{
            if(!match){
                res.redirect('/signupform')
            }
        });

        req.session.user =user;
        res.redirect('/dashboard');  //if saved then go to homepage
        res.status(200).json({ message: 'Redirecting to dashboard page'})

    }
    catch (error) {
        console.log(error)
    }
});




////////////////////////////// LOGIN POST API ENDS  /////////////////////////



router.get('/gallery', function (req, res) {
    userModelproduct.find().then((data)=>{
        res.render('gallery',{data:data});
    })
    .catch((error)=>{
        console.log(error);
    })
    
})



                            // logout dashboard

router.get("/logout",(req,res)=>{
    if(req.session.user && req.cookies.user_id){
        res.clearCookie("user_id");
        res.redirect('/');

    }
    else{
        res.redirect("/signupform")
    }
})

// session and cookies for dashboard

router.get('/dashboard', function (req, res) {
    if(req.session.user && req.cookies.user_id){
        res.render('./dashboard/dashboard');
    }
    else{
        res.redirect('/dashboard')
    }
    
})

router.get('/dashboard/add_product', function (req, res) {
    res.render('./dashboard/add_product')
})


router.get('/dashboard/edit_signup', function (req, res) {
    res.render('./dashboard/edit_signup')
})

router.get('/dashboard/edit_product',function(req,res){
    res.render('./dashboard/edit_product')
})


///////////// for product data showing on button click
router.get('/dashboard/show_product', function (req,res) {
    res.render('./dashboard/show_product')         
})
///////////// for custmerfrm data showing on button click
router.get('/dashboard/show_customerform', function (req,res) {
    res.render('./dashboard/show_customerform')         
})
///////////// for signup data user showing on button click
router.get('/dashboard/show', function (req,res) {
    res.render('./dashboard/show')
})

                      /////GET API FOR DATA OF ADD PRODUCT STARTS ///////////////////

router.get('/dashboard/view_product', function (req, res) {

    userModelproduct.find().then((data) => {
        res.render('./dashboard/view_product', { data: data });
        console.log(data);
    })
        .catch((error) => {
            console.log(error);
        })
})
   /////GET API FOR DATA OF ADD PRODUCT ENDS ///////////////////


//////////////////////////////// GET DATA OF CUSTOMER QUERIES FORM  STARTS////////////////

router.get('/dashboard/view_contact_form',function(req,res){
    userModelnew .find().then((data) => {
        res.render('./dashboard/view_contact_form',{ data:data });
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
})

//////////////////////////////// GET DATA OF CUSTOMER QUERIES FORM  ENDS////////////////
                          
                         //  Delete users data by id

    router.get('/remove/:id', (req, res)=> {
    userModel.findByIdAndRemove(req.params.id).then(()=>{
        res.redirect('../dashboard/view_register');
    })
    .catch((error)=>{
        res.redirect('../dashboard/view_register')
    })
    });

///////////////////// EDIT user data by id starts///////////////////////////////
 
router.get('/edit/:id',(req,res)=>{
        userModel.findById(req.params.id).then((data)=>{
        console.log(data);
        res.render('./dashboard/edit_signup',{data:data})                                
 })
        .catch((error)=>{
            console.log(error);
            res.redirect('/dashboard')
        })
     })
///////////////////// EDIT user data by id ends///////////////////////////////

        ////////  EDIT AND UPDATE DATA BY ID STARTS //////////////////
    
        router.post('/edit_signup/:id',(req,res)=>{
       var updatelogin ={
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        address: req.body.address,
        addresss: req.body.addresss,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip

    };
    userModel.findByIdAndUpdate(req.params.id,updatelogin).then(()=>{
        res.redirect('../dashboard/view_register');
    })
      .catch((error)=>{
        console.log(error)
        res.redirect('/dashboard')
      })

})
////////  EDIT AND UPDATE DATA BY ID ENDS //////////////////
     


/////////// SHOWING  signupform DATA USERS BY ID STARTS ////////////////////
// make a new file in dashboard for showing data on button click
router.get('/show/:id',(req,res)=>{
    userModel.findById(req.params.id).then((data)=>{
    console.log(data);
    res.render('./dashboard/show',{data:data})
})
    .catch((error)=>{
        console.log(error);
        res.redirect('/dashboard')
    })
 })
/////////// SHOWING DATA USERS BY ID ENDS ////////////////////


////////////// delete product data by id //////////////////////////////
router.get('/delete/:id', (req, res)=> {
    userModelproduct.findByIdAndDelete(req.params.id).then(()=>{
        res.redirect('/dashboard/view_product');
    })
    .catch((error)=>{
        res.redirect('/dashboard/view_product')
    })
    });

/////////////////////////////// edit product by id ///////////////////////
router.get('/edits/:id',(req,res)=>{
    userModelproduct.findById(req.params.id).then((data)=>{
        console.log(data)
        res.render('./dashboard/edit_product',{data:data});
    })
    .catch((error)=>{
        console.log(error)
        res.redirect('/dashboard')
    })
})

// /////////////////////////// update edit product by id ///////////////////////////////

router.post('/edit_product/:id',(req,res)=>{
    var updateproduct = {
        p_name: req.body.p_name,
        p_price: req.body.p_price,
        p_discount: req.body.p_discount,
        p_description: req.body.p_description
    };
    userModelproduct.findByIdAndUpdate(req.params.id,updateproduct).then(()=>{
        res.redirect('../dashboard/view_product')
    })
    .catch((error)=>{
        console.log(error)
        res.redirect('/dashboard')
    })
})


/////////// SHOWING product DATA BY ID STARTS   ////////////////////
// make a new file in dashboard for showing data on button click

router.get('/view/:id',(req,res)=>{
    userModelproduct.findById(req.params.id).then((data)=>{
    console.log(data);
    res.render('./dashboard/show_product',{data:data})
})
    .catch((error)=>{
        console.log(error);
        res.redirect('/dashboard')
    })
 })
/////////// SHOWING product DATA BY ID ENDS ////////////////////




// //// delete customer queries by id /////////////////////////////

router.get('/deleted/:id',(req,res)=>{
    usermodelnew.findByIdAndRemove(req.params.id).then(()=>{
        res.redirect('/dashboard/view_contact_form')
     })
     .catch((error)=>{
        console.log(error)
        res.redirect('/dashboard/view_contact_form')
     })
})
//////////////////////////////////////////////////////////////////////


// ////////  view customer  form data by id ///////////////////////////////////////////



router.get('/shows/:id',(req,res)=>{
 usermodelnew.findById(req.params.id).then((data)=>{
    res.render('./dashboard/show_customerform',{data:data})
 })

 .catch((error)=>{
    console.log(error)
    res.render('/dashboard')
 })
})

///////////////////////// viewing registered user records STARTS ////////////////////////////

router.get('/dashboard/view_register', function (req, res) {

    userModel.find().then((data) => {
        res.render('./dashboard/view_register', { data: data });
        console.log(data);
    })
        .catch((error) => {
            console.log(error);
        })
})

///////////////////////// viewing registered user records ENDS ////////////////////////////









app.use('/', router);
app.listen(4172)