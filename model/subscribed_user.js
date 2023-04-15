let mongoose = require('mongoose')
var url ='mongodb+srv://praveenkumaar715:praveen123@cluster0.p9f3rra.mongodb.net/Jewellery?retryWrites=true&w=majority';
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let userSchema = mongoose.Schema({
    subscribed:{
        type:String,
        required:true
    }
})

let usersubscribed = mongoose.model('susbcribed',userSchema)
module.exports = usersubscribed