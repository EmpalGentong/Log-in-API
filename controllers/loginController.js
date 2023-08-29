const User = require("../sequelize/models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password: Npassword } = req.body;
  if (!email || !Npassword) {
    res.json({ status: "error", message: "please provide email and password" });
  } else {
    User.query(
      "select email from Users where email=?",
      [email],
      async (err, result) => {
        if (err) throw err;
        if (
          !result[0] ||
          !(await bcrypt.compare(Npassword, result[0].password))
        ) {
          return res.json({
            status: "error",
            message: "email or password mismatch or not registered",
          });
        } else {
          const token = jwt.sign({ id: result[0].id }, process.env.jwt_secret, {
            expiresIn: process.env.jwt_expires,
          });
          const cookieOptions = {
            expiresIn: new Date(
              Date.now() + process.env.cookie_expires * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };
          res.cookie("userRegistered", token, cookieOptions);
          return res.json({ status: "success", message: "user has logged in" });
        }
      }
    );
  }
};

module.exports = { login };
