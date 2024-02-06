nodemailer=require('nodemailer')

// sendEmail=async(email,otp)=>{
    transport=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'aditibm7235@gmail.com',
            pass:'tapi jcwh rhih jict'
        }
    })
// }

//mail object

mail={
    from:'aditibm7235@gmail.com',
    to:'nand86363@gmail.com',
    subject:'otp',
    text:"your otp is := "
}

transport.sendMail(mail,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
