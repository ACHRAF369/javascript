const express = require("express");
const router = express.Router();
const db = require("../models");

//rout get 
router.get("/all", (req, res)=>{
    db.Todo.findAll().then(todos => res.send(todos));

});

//rout post
router.post('/new', (req, res)=> {
    db.Todo.create({
        text: req.body.text
    }).then()
})



module.exports = router;