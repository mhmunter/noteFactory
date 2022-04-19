const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs')
const path = require("path")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//api routes

app.get("/api/notes",(req, res) => {
fs.readFile("./db/db.json", function(err, data){
  if(err) throw err
  let notes = JSON.parse(data)
  console.log(notes)
res.json(notes)
})

})



//html routes

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
  })

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  })




  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });