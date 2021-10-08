const NewMonthModel = require("../../models/NewMonthModel");

module.exports = (app) => {
  app.get("/routes/api/months", (req, res) => {
    res.json({
      message: "test success",
    });
  });
  app.post("/routes/api/months", async (req, res) => {
    const newMonthPost = new NewMonthModel({
      month: req.body.month,
    });
    try {
      const NewMonth = await newMonthPost.save();
      res.status(201).json(NewMonth);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
};
