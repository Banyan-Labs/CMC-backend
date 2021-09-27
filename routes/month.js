const MonthlyCallModel = require ("../models/MonthlyCall")

module.exports = (app)  => {
// app.get("/api/months", async (req,res) => {
//     try {
//         const months = await Month.find()
//         res.json(months)
//     } catch (err) {
//         res.status(500).json({ message: err.message})
//     }
// });
app.post("/api/month", async (req, res) => {
    //console.log(req.body);
    const MonthlyCall = new MonthlyCallModel({
      month: req.body.month,
      introductions: [{
        name: req.body.introductions.name,
        introDescription: req.body.introductions.introDescription,
        introImage: req.body.introductions.introImage
      }],
      trainings: [{
        trainingTitle: req.body.trainings.trainingTitle,
        presenter: req.body.trainings.presenter,
        trainingDescription: req.body.trainings.trainingDescription,
        role: req.body.trainings.role
      }],
      otherNotes: req.body.otherNotes
    });
  
    try {
      const NewMonthlyCall = await MonthlyCall.save();
      res.status(201).json(NewMonthlyCall);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
} 
