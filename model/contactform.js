let mongoose = require ('mongoose')
let url = 'mongodb+srv://praveenkumaar715:praveen123@cluster0.p9f3rra.mongodb.net/Jewellery?retryWrites=true&w=majority';
mongoose.connect(url,{
    useNewUrlParser:true,
useUnifiedTopology:true
})

const userSchema = mongoose.Schema({

    // upload:{
    //   type:String,
    //   required:true
    // },
    email:{
        type:String,
        required:true
    },

    mobile:{
        type:Number,
        required:true
    },

    select:{
        type:String,
        required:true
    },

    textarea:{
        type:String,
        required:true
    }
})




const usermodelnew = mongoose.model('queries',userSchema);
module.exports = usermodelnew