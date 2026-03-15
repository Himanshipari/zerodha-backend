// const { model } = require("mongoose");
// const bcrypt = require("bcryptjs");

// const UserSchema = require("../schemas/UserSchema");

// UserSchema.pre("save", async function () {
//     if(this.isModified("password")){
//   this.password = await bcrypt.hash(this.password, 12);
//     }
// });

// module.exports = model("User", UserSchema);

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = require("../schemas/UserSchema");

UserSchema.pre("save", async function (next) {

  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }

});

module.exports = mongoose.model("User", UserSchema);