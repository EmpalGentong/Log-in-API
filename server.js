const Express = require("express");
require("dotenv").config();

const { sequelize } = require("./models/");
const app = Express();

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
  } catch (e) {
    console.log(e);
  }
};

app.get("/", (req, res) => {
  res.send("Running");
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is running on localhost:${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
