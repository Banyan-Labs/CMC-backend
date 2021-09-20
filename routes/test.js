module.exports = (app) => {
  app.get("/api/test", (req, res) => {
    res.json({ message: "test success" });
  });

  app.get("/api", (req, res) => {
    res.json({
      message: "if you're seeing this message the api server is running",
    });
  });
};
