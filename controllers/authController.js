const { user } = require("../models/");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const u = await user.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(200).send({ message: "success", status: u });
  } catch (e) {
    res.send({ message: "failed", status: e });
  }
};

const loginUser = (req, res) => {
  res.send(req.body);
};

module.exports = { registerUser, loginUser };
