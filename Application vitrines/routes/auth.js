const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const express = require("express");
//REGISTER
router.post("/register", async (req,res)=>{
    
    console.log(req.body);
     try{

         const salt = await bcrypt.genSalt(10);
         const hashedPass = await bcrypt.hash(req.body.password, salt)
             
const newUser = new User({ 
      username: req.body.username,
      email: req.body.username,
      password: hashedPass,
  })
//   const user = await newUser.save();
  console.log(newUser);
  res.status(200).json({newUser});
     } catch(err){
         res.status(500).json(err);
     }

})
//login
router.post("/login", async (req,res)=>{
    try{
      const user = User.findOne({username: req.body.username})
      !user && res.status(400).json("Wrong credentials!")

       const validated = await bcrypt.compare(req.body.password, user.password)
       !validated && res.status(400).json("Wrong credentials!")
 
    }catch(err) {
        express.status(500).json(err);
        
    }
})

module.exports = router