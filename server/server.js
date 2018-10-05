

var express = require('express');
var bodyParser = require('body-parser');

const mongoose = require ('./db/mongoose');
var {Todo} = require ('./model/serverTodo.js');
var  {User} = require ('./model/serverUser.js');

var app = express();

app.listen(3000, ()=>{
    console.log('Started on port 3000');
});
app.use(bodyParser.json());
 
//app.post(''):
