const express = require("express");
const app = express();
require("dotenv").config();
const dotenv = process.env;

app.get("/", (req, res) => {
  res.status(200).send("Bismillah");
});

app.listen(dotenv.PORT, () => {
  console.log(`app listening port ${dotenv.PORT}`);
});
