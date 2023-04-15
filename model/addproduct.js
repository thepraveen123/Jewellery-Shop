let mongoose = require ('mongoose')
let url = 'mongodb+srv://praveenkumaar715:praveen123@cluster0.p9f3rra.mongodb.net/Jewellery?retryWrites=true&w=majority';
mongoose.connect(url,{
    useNewUrlParser:true,
useUnifiedTopology:true
})

const userSchema = mongoose.Schema({

    // image:{
    //   type:String,
    //   required:true
    //  data:Buffer,
    //  type:String,
    //  required:true
    // },
    p_name:{
        type:String,
        required:true
    },

    p_price:{
        type:String,
        required:true
    },

    p_discount:{
        type:String,
        required:true
    },

    p_description:{
        type:String,
        required:true
    }
})




const usermodel = mongoose.model('addproducts',userSchema);
module.exports = usermodel