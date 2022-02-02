const router = require('express').Router()
const accountSid = process.env.ACCOUNT_S_ID; 
const authToken = process.env.AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken); 
 
//https://crud-intouch-backend.herokuapp.com/sms/send?recipient=${number}&message=${message}

router.get('/send', (req, res) => {
    const { recipient, message } = req.query

    client.messages 
      .create({ 
         body: message,  
         messagingServiceSid: process.env.MESSAGING_SERVICE_S_ID,      
         to: recipient 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
      res.redirect("http://localhost:5000/auth");
})

module.exports = router