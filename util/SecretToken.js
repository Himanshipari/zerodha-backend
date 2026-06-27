
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {

  if (!process.env.TOKEN_KEY) {
    throw new Error("TOKEN_KEY is missing in .env");
  }

  const token = jwt.sign(
    { id },
    process.env.TOKEN_KEY,
    {
      expiresIn: "3d",
    }
  );

  return token;
};