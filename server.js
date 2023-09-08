const Express = require("express");
require("dotenv").config();
const app = Express();

app.get("/", (req, res) => {
  res.send("Running");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on localhost:${process.env.PORT}`);
});
