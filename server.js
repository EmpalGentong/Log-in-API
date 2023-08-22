const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config();
const app = express();
const dotenv = process.env;
const { sequelize } = require("./sequelize/models");

app.use("./js", express.static(__dirname + "public/js"));
app.use("./css", express.static(__dirname + "public/css"));
app.use(express.json());
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");

const connectDB = async () => {
  console.log("checking connection to database");
  try {
    await sequelize.authenticate();
    console.log("connected to DB");
  } catch (err) {
    res.json({ message: err });
  }
};

//HomePage Routes
app.get("/", (req, res) => {
  try {
    res.sendFile("./views/index.ejs");
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//Register Routes

app.use("/register", require("./routes/registerRoutes"));
app.use("/login", require("./routes/loginRoutes"));

(async () => {
  await connectDB();
  app.listen(dotenv.PORT, () => {
    try {
      console.log(`app running on port ${dotenv.PORT}`);
    } catch (err) {
      console.log(err);
    }
  });
})();
