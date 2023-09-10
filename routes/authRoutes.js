const Express = require("express");
const router = Express.Router();
const {
  registerUser,
  loginUser,
  getAllUser,
  getData,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getAll", getAllUser);
router.get("/getAll/:id", getData);
module.exports = router;
