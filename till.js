const request = require('request-json');
const url = require('url');
require('dotenv').config();

const TILL_URL = url.parse(process.env.TILL_URL);
const TILL_BASE = TILL_URL.protocol + "//" + TILL_URL.host;
let TILL_PATH = TILL_URL.pathname;

if(TILL_URL.query != null) {
  TILL_PATH += "?"+TILL_URL.query;
}

module.exports = phone => {
  request.createClient(TILL_BASE).post(TILL_PATH, {
    "phone": phone,
    "questions": [{
      "text": "Your player is online! Reply with Okay when you're ready to be notified when they come back online.",
        "tag": "user_res",
        "responses": ["Okay", "Stop"],
        "webhook": "https://rlplayertracker.herokuapp.com/response/"
      }
    ],
    "conclusion": "Understood!"
  }, function(err, res, body) {
    return console.log(res.statusCode);
  });
};