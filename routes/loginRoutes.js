const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.sendFile("login.html", { root: "./public/" });
});
routes.post("/", () => {});

module.exports = routes;
