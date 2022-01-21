const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;


mongoose
  .connect("mongodb://localhost:27017/hodlinfo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Success...");
  })
  .catch((e) => {
    console.log(e);
  });


const api = require('./api');
app.use('/api',api);


app.listen(port,()=>{
    console.log(`Server listen on ${port}`)
})