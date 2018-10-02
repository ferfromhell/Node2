const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5bb3df6b264533154c174566")}, 
        {
            $set:{
                completed: true,
                text: "Changed true connection"
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    client.close();
});