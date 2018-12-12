
// Write a server that keeps track of a counter! Initialize a global variable that holds the count (starting at 0). Write three routes called POST /increment, POST /decrement, and GET /value. The first two should increment and decrement the value respectively and then respond with the new counter value. The third route should just respond with the current value. Again, verify that your server works with Postman.

//require express from npm
const express = require('express');

//get an application instance with the app variable
const app = express();

//set a variable for our port
const port = 3000;

//initialize the counter
let counter = 0;

//use the get function to set a route, increment counter
app.get('/increment', function(req, res) {
    counter++;
    res.send(`${counter}`);
});

//use the get function to set a route, decrement counter
app.get('/decrement', function(req, res) {
    counter--;
    res.send(`${counter}`);
});

//use the get function to set a route, show value of counter
app.get('/value', function(req, res) {
    res.send(`${counter}`);
});

app.listen(port);