require('dotenv').config();
const request = require('request');

const apiKey = process.env.API_KEY;


const listEmails = function(){
  request({
    uri: 'https://api.myngp.com/v2/BroadcastEmails',
    headers:{
      apiKey,
      'Content-Type': 'application/json'
    },
    json:true
  }, (e,r,b)=>{
    if(e) return e;
    const status_code = r.status_code;
    b.items.map(x=>{
      const message_string = `${x.emailMessageId} ${x.name}`;
      console.log(message_string);
    })
    const total = b.count;
    console.log(`Total: ${total}`);
  })
}

listEmails()
