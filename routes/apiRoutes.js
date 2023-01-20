// dependencies needed for apiRoute code
let app = require('express').Router();
let fs = require('fs');
let db = require('../db/db.json');

// Get notes 
app.get('/notes', (req, res) => {
  // reading the db file for any notes
  db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
  res.json(db);

});

// post to notes 
app.post('/notes', (req, res) => {
    let note = {
      //sets a random number to each note 
      id: Math.floor(Math.random() * 1000),
      // where the notes will be posted
      title: req.body.title,
      text: req.body.text
    }
    // now we are pushing the notes to be on the page 
    db.push(note);
    fs.writeFileSync('./db/db.json', JSON.stringify(db), (err, res) => {
    });
    res.json(db);
  });

// delete a note
app.delete("/notes/:id", (req, res) => {
  // reading the db.json file 
  let db = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  let noteId = (req.params.id).toString();
  //removing the note with the id 
  db = db.filter(selected => {
      return selected.id != noteId;
  })
  // changing the db file to show that its empty
  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.json(db);
})

module.exports = app;