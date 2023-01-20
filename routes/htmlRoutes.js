// dependencies included to get the correct pathway 
let path = require('path');
let app = require('express').Router();
// const app = require('express').Router();

// routing 

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;