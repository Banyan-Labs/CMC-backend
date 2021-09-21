const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MonthSchema = new Schema({
  month: {
    type: String,
  },
});

const MonthModel = mongoose.model("month", MonthSchema);

module.exports = MonthModel;