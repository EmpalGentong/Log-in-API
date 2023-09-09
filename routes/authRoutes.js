const Express = require("express");
const router = Express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
