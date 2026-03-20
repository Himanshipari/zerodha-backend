// // const User = require("../model/UserModel.js");
// const User = require("../model/UserModel");
// const { createSecretToken } = require("../util/SecretToken");
// const bcrypt = require("bcryptjs");

// module.exports.Signup = async (req, res) => {
//   try {

//     const { email, password, username } = req.body;

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.json({ message: "User already exists", success: false });
//     }

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       email,
//       password: hashedPassword,
//       username,
//     });

//     const token = createSecretToken(user._id);

//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: false,
//     });

//     return res.status(201).json({
//       message: "User signed up successfully",
//       success: true,
//       user,
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports.Login = async (req, res) => {

//   try {

//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.json({
//         message: "All fields are required",
//         success: false
//       });
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.json({
//         message: "Incorrect email or password",
//         success: false
//       });
//     }

//     const auth = await bcrypt.compare(password, user.password);

//     if (!auth) {
//       return res.json({
//         message: "Incorrect email or password",
//         success: false
//       });
//     }

//     const token = createSecretToken(user._id);

//     res.cookie("token", token, {
//       withCredentials: true,
//       httpOnly: false,
//     });

//     return res.status(200).json({
//       message: "User logged in successfully",
//       success: true
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");

// ================= SIGNUP =================

module.exports.Signup = async (req, res) => {
  try {

    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const user = await User.create({
      email,
      username,
      password,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {

    console.error("Signup Error:", error);

    res.status(500).json({
      message: "Server error",
      success: false,
    });

  }
};


// ================= LOGIN =================

module.exports.Login = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const bcrypt = require("bcryptjs");

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {

    console.error("Login Error:", error);

    res.status(500).json({
      message: "Server error",
      success: false,
    });

  }
};