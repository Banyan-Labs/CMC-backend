const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
require("dotenv").config();

const apiRoutes = require("./routes/test");



apiRoutes(app);

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_CONNSTRING}`;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`app running on port... ${PORT}`));
