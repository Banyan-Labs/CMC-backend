const mongoose = require('mongoose');
const express = require('express')
const app = express

app.listen(300, () => console.log('server started'))



mongoose.connect("mongodb+srv://Caronk92:Caronk92@cluster0.8e7mv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log("connected") },
    err => { console.log("error",err) }
  );;