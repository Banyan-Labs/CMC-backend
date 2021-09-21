const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
require("dotenv").config();

const apiRoutes = require("./routes/test");
const apiPreviousMonth = require("./routes/months");

apiRoutes(app);
apiPreviousMonth(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_CONNSTRING}`;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/api", (req, res) => {
  res.json({
    message: "if you're seeing this message the api server is running",
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`app running on port... ${PORT}`));




