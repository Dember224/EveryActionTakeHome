require('dotenv').config();
const request = require('request');
const axios = require('axios');

const apiKey = process.env.API_KEY;

const listEmails = function(){
  axios.get('https://api.myngp.com/v2/BroadcastEmails',{
    headers: {
      apiKey,
      'Content-Type': 'application/json'
    }
  })
  .then((r)=>{
    const status_code = r.status_code;
    const body = r.data;
    body.items.map(x=>{
      const message_string = `${x.emailMessageId} ${x.name}`;
      console.log(message_string);
    })
    const total = body.count
    console.log(`Total: ${total}`);
  })
  .catch((e)=>{
    console.log(e);
  })
}

//The response body should look like this.
// {
//   items: [
//     { emailMessageId: 435, name: 'Split Email' },
//     { emailMessageId: 434, name: 'Fundraising Email' },
//     { emailMessageId: 433, name: 'Welcome to our email list!' }
//   ],
//   count: 3
// }
listEmails()
