const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

//aa data save karva mate che
//POST route to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data

    //create the new Person documnet using the Mongoose model
    const newPerson = new Person(data);

    //Save the new person to the database using async await
    const response = await newPerson.save();
    console.log("Data Save Succesfully.....");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internel Server Error!!!" });
  }
});

// aa database mathi data leva mate use thai che
//Using get method Fetch data from the database

router.get("/", async (req, res) => {
  try {
    //find data in database
    const data = await Person.find();
    console.log("Data Feched Now (:...");

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internel Server Error!!!" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;

    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response feched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internel Server Error!!!" });
  }
});


// UPDATE METHOD 
router.put('/:id' , async (req , res) => {
  try{

    const personId = req.params.id; //Exctrect the id from the URL parameter
    const updatePersoneData = req.body;//Update data for the person 

    const response = await Person.findByIdAndUpdate(personId , updatePersoneData, {
      new: true,// Returns the Update Document 
      runValidators: true, //Run Mongoose Validetor to check data is proper or not 
    })

    if(!response){
      return res.status(404).json({error:"Person Not Found!!!!"})
    }

    console.log("data Upadated..........");
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internel Sarver Error!!! '})
  }
});


//Delete Method  
router.delete('/:id' , async (req , res) => {
   try{
     const personId = req.params.id; //User Want To delete this id 

    const response = await Person.findByIdAndDelete(personId);//Query For Delet Data Of User Id 

    //when any problem in this code response = to null fire this error
    if(!response){
      return res.status(404).json({error: 'Persone Not Found !!!'});
    }
    console.log('Data Deleted');
    res.status(200).json({massage:'person Deleted Successfully......'})
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internel Server Error'});
  }
});



module.exports = router;
