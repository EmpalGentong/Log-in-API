const express = require("express");
require("dotenv").config();
const app = express();
const dotenv = process.env;
const { sequelize } = require("./sequelize/models");

const connectDB = async () => {
  console.log("checking connection to database");
  try {
    await sequelize.authenticate();
    console.log("connected to DB");
  } catch (err) {
    res.json({ message: err });
  }
};

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Bismillah" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

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
