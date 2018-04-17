//initialize requires
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//initialize express app
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

//body body middleware
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.send('invalid endpoint')
})

app.listen(port, ()=>{
  console.log("server started on port "+port);
})
