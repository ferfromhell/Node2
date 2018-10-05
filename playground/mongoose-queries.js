const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');
const {ObjectID} = require('mongodb');

//var id = "5bb7b3b8e07c124eb8728e3d";
var id = "6bb7b3b8e07c124eb8728e3d";

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
//  }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//       }
//       console.log('Todo By Id', todo);
//     }).catch((e) => console.log(e));
User.findById(id).then((user) => {
    if(!user) {
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
 }, (e) => {
    console.log(e);
 });