const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LoginSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const LoginModel = mongoose.model("login", LoginSchema);
module.exports = LoginModel;
