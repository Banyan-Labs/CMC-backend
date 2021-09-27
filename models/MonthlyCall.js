const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MonthlyCallSchema = new Schema({
  month: String,
  introductions: [
    {
      name: String,
      introDescription: String,
      image: String,
    },
  ],
  trainings: [
    {
      trainingTitle: String,
      presenter: String,
      trainingDescription: String,
      role: String,
    },
  ],
});

const MonthlyCallModel = mongoose.model("monthlyCall", MonthlyCallSchema);

module.exports = MonthlyCallModel;
