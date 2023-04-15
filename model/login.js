const mongoose = require('mongoose')
var url ='mongodb+srv://praveenkumaar715:praveen123@cluster0.p9f3rra.mongodb.net/Jewellery?retryWrites=true&w=majority';
mongoose.connect(url,{
 useNewUrlParser:true,
 useUnifiedTopology:true

})

// const userSchema= mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     pass:{
//         type:String,
//         required:true
//     }
// })

// var userModel= mongoose.model('login',userSchema)
// module.exports= userModel