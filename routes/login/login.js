const LoginModel = require("../models/LoginModel");

module.exports = (app) => {
  app.get("/api/test/login", (req, res) => {
    res.json({
      message: "test success",
    });
  });
  app.post("/api/test/login", async (req, res) => {
    //console.log(req.body);
    const newLoginPost = new LoginModel({
      test: req.body.test,
    });
  
    try {
      const NewLogin = await newLoginPost.save();
      res.status(201).json(NewLogin);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  
};
