const PreviousMonthModel = require ("../models/PreviousMonth")

module.exports = (app)  => {
app.get("/api/months", async (req,res) => {
    try {
        const months = await Month.find()
        res.json(months)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
});
app.post("/api/months", async (req, res) => {
    //console.log(req.body);
    const PreviousMonth = new PreviousMonthModel({
      months: req.body.months,
    });
  
    try {
      const NewTestMonths = await PreviousMonth.save();
      res.status(201).json(NewTestMonths);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
} 
