const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use(require("./api.js"));

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}.`)
});