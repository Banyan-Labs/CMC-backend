const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const apiRoutes = require('./routes/test').test;

apiRoutes(app);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/api", (req, res) => {
  res.json({ message: 'if you\'re seeing this message the api server is running' });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`app running on port... ${PORT}`));
