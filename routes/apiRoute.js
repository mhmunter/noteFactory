// const fs = require("fs");
 //const path = require("path");
// const express = require('express');
// const app = express();
const router = require('express').Router();
const { notes } = require('../db/db.json')



// app.get("/notes",(req, res) => {
//     fs.readFile("./db/db.json", function(err, data){
//       if(err) throw err
//       let notes = JSON.parse(data)
//       console.log(notes)
//     res.json(notes)
//     })
    
//     })
    
router.get("/notes",(req, res) => {
    // let results = notes;
     if (req.query) {
       results = filterByQuery(req.query, results);
     }
    res.json(notes);
  });

    
    router.post("./api/notes",(req, res) => {
      fs.readFile("../db/db.json", function(err, data){
        if(err) throw err
        let notes = JSON.parse(data)
        console.log(notes)
      let newNote = req.body

      notes.push(newNote)
      fs.writeFile("../db/db.json", JSON.stringify(notes), function(err, data){
        if(err) throw err
        res.json(notes)
      } )
      })
      
      });



module.exports = router;