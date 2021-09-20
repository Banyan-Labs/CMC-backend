const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
// const mongoose = require('mongoose')
app.use(cors())


const Username = require("./login");

// mongoose.connect(process.env.Mongo_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log("method: " + req.method)
  console.log("path: " + req.path)
  console.log("ip: " + req.ip)

  next()
})

app.use(express.static(__dirname + "/public"))

app.post('/api/test/login', (req, res) => {
  // console.log(req.body)
  let name = new Username(req.body)
  name.save((err, name) => {
    if (err) {
      res.json({
        "message": "Username already exists"
      })
    } else {
      res.json(name)
    }
  })
});