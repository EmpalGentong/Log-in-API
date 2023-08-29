const routes = require("express").Router();
const { login } = require("../controllers/loginController");

routes.get("/", (req, res) => {
  res.sendFile("login.html", { root: "./public/" });
});
routes.post("/", login);

module.exports = routes;
