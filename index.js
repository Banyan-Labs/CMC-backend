const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const mongoose = require("mongoose");
const TestModel = require("./models/TestModel");

const apiRoutes = require("./routes/test");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

apiRoutes(app);

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/api", (req, res) => {
  res.json({
    message: "if you're seeing this message the api server is running",
  });
});

app.post("/api/test/post", async (req, res) => {
  console.log(req.body);
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`app running on port... ${PORT}`));
