const TestModel = require("../models/TestModel");

module.exports = (app) => {
  app.get("/api/test", (req, res) => {
    res.json({
      message: "test success",
    });
  });
  app.post("/api/test", async (req, res) => {
    //console.log(req.body);
    const newTestPost = new TestModel({
      test: req.body.test,
    });
  
    try {
      const NewTest = await newTestPost.save();
      res.status(201).json(NewTest);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
};
