let mongoose = require('mongoose')
let url = 'mongodb+srv://praveenkumaar715:praveen123@cluster0.p9f3rra.mongodb.net/Jewellery?retryWrites=true&w=majority';
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let userSchema= mongoose.Schema({
       emailnew:{
        type:String,
        required:true
       },
       phonenew:{
        type:String,
        required:true
       },
       querynew:{
         type:String,
         required:true
       }
       
})

const userModelvisit = mongoose.model('visits',userSchema)
module.exports = userModelvisit
// const usermodelnewvisit = mongoose.model('queries',userSchema);
// module.exports = usermodelnewvisst