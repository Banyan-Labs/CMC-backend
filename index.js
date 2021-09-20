const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const mongoose = require("mongoose");


const apiRoutes = require("./routes/test");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

apiRoutes(app);

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_CONNSTRING}`;
mongoose.connect(connectionString, {
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

//Example POST request

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`app running on port... ${PORT}`));
