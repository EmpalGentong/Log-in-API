const User = require("../sequelize/models/user");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { email, password: Npassword } = req.body;
  if (!email || !Npassword) {
    res.json({ status: "error", message: "please provide email and password" });
  } else {
    User.query(
      "select email from Users where email=?",
      [email],
      async (err, result) => {
        if (err) throw err;
        if (result[0]) {
          res.json({
            status: "error",
            message: "email has been already registered!!!",
          });
        } else {
          const pass = bcrypt.hash(Npassword, 8);
          User.query(
            "Insert into users set ?",
            {
              email: email,
              password: pass,
            },
            (err, result) => {
              if (err) throw err;
              return res.json({
                status: "success",
                message: "register success",
              });
            }
          );
        }
      }
    );
  }
};

module.exports = { register };
