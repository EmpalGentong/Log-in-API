const express = require("express");
require("dotenv").config();
const sql = require("pg");

const app = express();
const dotenv = process.env;

//DB init
const client = new sql.Client({
  user: dotenv.DB_USER,
  host: dotenv.DB_HOST,
  database: dotenv.DB_NAME,
  password: dotenv.DB_PASS,
  port: dotenv.DB_PORT,
});

app.get("/", async (req, res) => {
  try {
    const respond = await client.query("select * from product;");
    res.status(200).json({ message: respond.rows });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.listen(dotenv.PORT, () => {
  try {
    client.connect((err) => {
      if (!err) {
        console.log(`connected to sql, app listening port ${dotenv.PORT}`);
      } else {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
});
