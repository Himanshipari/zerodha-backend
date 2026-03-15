const { model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = require("../schemas/UserSchema");

UserSchema.pre("save", async function () {
    if(this.isModified("password")){
  this.password = await bcrypt.hash(this.password, 12);
    }
});

module.exports = model("User", UserSchema);