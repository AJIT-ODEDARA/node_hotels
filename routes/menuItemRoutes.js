const express = require('express');
const router = express.Router();
const menuItem = require('./../models/MenuItem');


router.post("/" , async (req , res) => {
    try{
  
      const data = req.body  //Assuming the request body contains the menuItem data 
  
      //create the new menuItem documnet using the Mongoose model
      const newmenuItem = new menuItem(data);
  
      //Save the new menuItem to the database using async await
      const response = await newmenuItem.save();
      console.log("Data Save Succesfully.....");
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internel Server Error!!!'});
    }
  });

  

  // aa database mathi data leva mate use thai che 
//Using get method Fetch data from the database 

router.get('/' , async (req , res ) => {
    try{
  
      //find data in database 
      const data = await menuItem.find();
      console.log('Data Feched Now (:...');
  
      res.status(200).json(data);
  
  
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internel Server Error!!!'});
    }
  });


  router.use('/:taste' , async (req , res ) => {
    const tasteType = req.params.taste;
try{
    if(tasteType == "spicy" || tasteType == "sweet" || tasteType == "sour"){
        const response = menuItem.find({taste: tasteType});
        console.log("Menu taste Is Fached ......");
        res.status(200).json(response);
    }else {
        res.status(404).json({error:"Invalid Work Type"});
    }

}
catch(err){
    console.log(err);
    res.status(500).json({error:"Internel Server Error!!!"});
}
}

  );

  

  module.exports = router;