const router = require("express").Router();
const path = require("path");
const crawler = require('./crawler.js');
const request = require('request-json');
const url = require('url');
require('dotenv').config;

var TILL_URL = url.parse(process.env.TILL_URL);
var TILL_BASE = TILL_URL.protocol + "//" + TILL_URL.host;
var TILL_PATH = TILL_URL.pathname;

if(TILL_URL.query != null) {
  TILL_PATH += "?"+TILL_URL.query;
}

request.createClient(TILL_BASE).post(TILL_PATH, {
  "phone": process.env.PN,
  "questions": [{
  "text": "Favorite color?",
    "tag": "favorite_color",
    "responses": ["Red", "Green", "Yellow"],
    "webhook": "https://rlplayertracker.herokuapp.com/results/"
  }],
  "conclusion": "Thank you for your time"
}, function(err, res, body) {
  return console.log(res.statusCode);
});

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

module.exports = router;