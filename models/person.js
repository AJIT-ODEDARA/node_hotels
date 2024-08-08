const mongoose = require('mongoose');


//models yaa scheema same 
const personeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef' , 'waiter' , 'manager'],
        required: true

    },
    mobile:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required: true,
    }
});


//create Persen Model
const Person = mongoose.model('Person' , personeSchema);
module.exports = Person;