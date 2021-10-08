const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let NewMonthSchema = new Schema({
  month: {
    type: String,
  },
});

const NewMonthModel = mongoose.model("newmonth", NewMonthSchema);
module.exports = NewMonthModel;
