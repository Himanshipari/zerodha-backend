const User = require("../model/UserModel.js");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {

    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.Login = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "All fields are required",
        success: false
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: "Incorrect email or password",
        success: false
      });
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.json({
        message: "Incorrect email or password",
        success: false
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(200).json({
      message: "User logged in successfully",
      success: true
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};