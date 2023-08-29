const routes = require("express").Router();
const { register } = require("../controllers/registerController");

routes.get("/", (req, res) => {
  //   console.log("register");
  res.sendFile("register.html", { root: "./public/" });
});

routes.post("/");

module.exports = routes;
