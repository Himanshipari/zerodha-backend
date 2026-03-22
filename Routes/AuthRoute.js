const router = require("express").Router();
const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", userVerification);


module.exports = router;