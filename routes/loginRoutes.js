const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.sendFile("login.html", { root: "./public/" });
});

module.exports = routes;
