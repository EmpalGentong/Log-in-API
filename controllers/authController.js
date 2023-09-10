const { user } = require("../models/");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, email } = req.body;
  const salt = await bcrypt.genSalt(12);
  const password = await bcrypt.hash(req.body.password, salt);
  try {
    if (await user.findOne({ where: { email: email } })) {
      throw Error("User already registered");
    }

    const u = await user.create({
      name: name,
      email: email,
      password: password,
    });

    res
      .status(200)
      .json({ message: `${name} with email ${email} has been registered` });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const getAllUser = async (req, res) => {
  try {
    const u = await user.findAll();
    setTimeout(() => {
      res.status(200).send(u);
    }, 1000);
  } catch (e) {
    res.send(e);
  }
};

const getData = async (req, res) => {
  const usrId = req.params.id;
  try {
    const u = await user.findOne({ where: { id: usrId } });
    res.status(200).send(u);
  } catch (e) {
    res.send({ msg: e });
  }
};

const loginUser = (req, res) => {
  res.send(req.body);
};

module.exports = { registerUser, loginUser, getAllUser, getData };
