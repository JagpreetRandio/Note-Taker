// Dependencies for developing code 

const express = require('express');
const path = require('path');
const fs = require('fs'); 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { Console } = require('console');

// setting Express app

const app = express();
const PORT = process.env.PORT || 3002;

// adding middleware 

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('./public'));

// Adding routes to code

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Adding listen PORT to code 

app.listen(PORT, () => {
    console.log (`API server is now working on port ${PORT}! Enter http://localhost:3002 in the browser and check out the Note Taker App!`)
})
