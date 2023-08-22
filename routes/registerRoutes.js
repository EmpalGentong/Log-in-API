const routes = require("express").Router();

routes.get("/", (req, res) => {
  //   console.log("register");
  res.sendFile("register.html", { root: "./public/" });
});

module.exports = routes;
