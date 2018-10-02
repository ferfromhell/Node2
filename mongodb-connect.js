//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text : 'Walk the dog', 
    //     completed : 'False'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //       }
    //       console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: 'Fer',
    //     age: 30,
    //     location: 'Tijuna'
    // }, (err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Users', err);
    //       }
    //       console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    db.collection('Todos').find({}).count().then((count) => {
        console.log(`Todos: ${count}`);
        //console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log('Unable to fetch todos',err);
    });
    client.close();
});
