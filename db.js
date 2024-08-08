// this file use for database conectivity
const mongoose = require('mongoose');

//define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' //last is a database name so set as per your database name 

//set up MongoDB connections
mongoose.connect(mongoURL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get default connections
//Mongoose maintains a default connections object representing the MongoDB connectins.
const db = mongoose.connection;

//define eventlistener for database connections.
db.on('connected' , () => {
    console.log("connect MongoDB with Server");
});

//for a error 
db.on('error' , (err) => {
    console.error("MongoDB connection error",err);
});

//where database disconnect
db.on('disconnected' , () => {
    console.log(" MongoDB disconnected.");
});


//Export the database connection 
module.exports= db;