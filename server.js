const Express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const { sequelize } = require("./models/");
const app = Express();
const cors = require("cors");

app.use(Express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
    app.listen(process.env.PORT, () => {
      console.log(`server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

app.get("/", (req, res) => {
  res.send("Running");
});

connectDB();
// routes
app.use(authRoutes);
