let mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

var url ='mongodb+srv://praveenkumaar715:praveen123@cluster0.p9f3rra.mongodb.net/Jewellery?retryWrites=true&w=majority';
mongoose.connect(url,{
    useNewUrlParser:true,
useUnifiedTopology:true})






const userSchema =mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
  
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },

    zip:{
        type:Number,
        required:true
    },
})


// bycrypting password
//pre ---  once we get the user data ,before calling save method
// it takes two arguments
//before calling the save method, we call the function where we hash the passsword

// next -we get the data,uske bad pre method call hoga (where we hash the password) then save method run hoga
userSchema.pre("save",function(next){ 
    if(!this.isModified("password")){

        return next()
    }
    //hash password
    this.password = bcrypt.hashSync(this.password,10)
    next() // save method will work
})

//compare password
userSchema.methods.comparePassword= function(plaintext,callback){
    return callback(null,bcrypt.compareSync(plaintext,this.password));
};
const userModel= mongoose.model('usersignup',userSchema);
module.exports= userModel;


// var mongoose = require('./connect_database')

