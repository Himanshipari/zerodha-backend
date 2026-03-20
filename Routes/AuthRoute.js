const router = require("express").Router();
const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", userVerification);




router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ success: true, message: "Logged out successfully" });
});


module.exports = router;