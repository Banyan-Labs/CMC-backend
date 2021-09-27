const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PreviousMonthSchema = new Schema({
    months: {
        type: String,
        required: true
    },
});

const PreviousMonthModel = mongoose.model("previousMonth", PreviousMonthSchema);

module.exports = PreviousMonthModel;