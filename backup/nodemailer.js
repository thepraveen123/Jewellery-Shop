var nodeMailer= require('nodemailer');
var  tarnsport = nodeMailer.createTransport({
    service:'gmail',
    // host:'smtp.gmail.com',
    // port:345,
    // secure:false,
    // requireTLS:true,
    auth:
    {
        user:'praveenkumaar730@gmail.com',
        pass:'oirqxhsuqrwmmjij'
    }
});
var mailoptions = {
    from:'praveenkumaar730@gmail.com',
    to:'praveenkumaar730@gmail.com',
    subject:'nodemail to you',
    text:"hi brother"
}
tarnsport.sendMail(mailoptions,function(err,info){
    if(error)
    {
        console.log(error)
    }
    else{
        console.log("email has been sent to you",info,response)
    }
})