const MonthlyCallModel = require("../models/MonthlyCall");

module.exports = (app) => {
  //GET route to return ALL months
app.get('/api/month', (req, res) => {
  try {
    MonthlyCallModel.find({}, (err, month) => {
      res.status(201).json(month)
    })
  }catch (err){
    res.status(500).json({ message: err.message})
  }

})
  //POST route to add new month
  app.post("/api/month", async (req, res) => {
   

    const MonthlyCall = new MonthlyCallModel({
      month: req.body.month,
      year: req.body.year,
      introductions: [
        {
          name: req.body.introductions.name,
          introDescription: req.body.introductions.introDescription,
          introImage: req.body.introductions.introImage,
        },
      ],
      trainings: [
        {
          trainingTitle: req.body.trainings.trainingTitle,
          presenter: req.body.trainings.presenter,
          trainingDescription: req.body.trainings.trainingDescription,
          role: req.body.trainings.role,
          trainingImage: req.body.trainings.trainingImage,
        },
      ],
      otherNotes: req.body.otherNotes,
    });

    try {
      const NewMonthlyCall = await MonthlyCall.save();
      res.status(201).json(NewMonthlyCall);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
};
