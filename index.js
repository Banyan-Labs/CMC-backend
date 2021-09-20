const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());

const apiRoutes = require("./routes/test");

apiRoutes(app);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`app running on port... ${PORT}`));
