const router = require("express").Router();
const path = require("path");
const crawler = require('./crawler.js');

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

module.exports = router;