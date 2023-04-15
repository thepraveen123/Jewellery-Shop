const mongoose =require('mongoose');

var url =mongoose.connect('mongodb+srv://praveenkumaar715:praveen123@cluster0.p9f3rra.mongodb.net/Jewellery?retryWrites=true&w=majority',
{

// mongoose.connect('mongodb://127.0.0.1:27017/demo3',
// {
    
useNewUrlParser:true,
useUnifiedTopology:true})

.then(()=>console.log("connection succesfull.."))
.catch((error)=>console.log(error));


// module.exports = url;