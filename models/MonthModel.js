const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MonthModelSchema = new Schema({
    month: {
        type: String,
        required: true
    },
});

const MonthModel = mongoose.model("monthModel", MonthModelSchema);

module.exports = MonthModel;