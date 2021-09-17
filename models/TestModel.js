const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TestSchema = new Schema({
  test: {
    type: String,
  },
});

const TestModel = mongoose.model("test", TestSchema);

module.exports = TestModel;
