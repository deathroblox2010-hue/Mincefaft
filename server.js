const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("alive");
});

app.listen(3000);