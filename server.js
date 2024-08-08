const express = require("express");
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body



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


app.listen(3000 , () => {
  console.log("server is Actived......");
});
