const express = require("express");
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body


const PORT = process.env.PORT || 3000;


app.get("/", function (req, res) {
  res.send("Welcome");
});



//FOR PERSON 
// import Router 
const personRoutes = require('./routes/personeRoutes');
//Use the Router
app.use('/person' , personRoutes)


// FOR MENU ITEM 
const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menuItem' , menuItemRoutes);


app.listen(PORT , () => {
  console.log("server is Actived......");
});
