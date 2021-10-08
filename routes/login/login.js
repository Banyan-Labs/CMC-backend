const LoginModel = require("../../models/LoginModel");

module.exports = (app) => {
  app.get("/api/test/login", (req, res) => {
    res.json({
      message: "test success",
    });
  });
  app.post("/api/test/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "empty fields" });
    } else {
      const newLoginPost = new LoginModel({
        email: req.body.email,
        password: req.body.password,
      });
      try {
        const NewLogin = await newLoginPost.save();
        res.status(201).json(NewLogin);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  });
};
