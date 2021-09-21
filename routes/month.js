const MonthModel = require ('../models/MonthModel')

module.exports = (app) => {
    app.get("/api/month", (req, res) => {
      res.json({ message: "month success" });
    });
  
    app.get("/api", (req, res) => {
      res.json({
        message: "if you're seeing this message the api server is running",
      });
    });
  };