const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
// const path = require('path')

const app = new express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://adminTres:rsFRc5fmuTHy7aSG@proyectos.abuzk.mongodb.net/usersdb?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err, res) => {
    if(err){
        console.log('Error al conectarse a la base de datos', err);
    } else {
        app.listen(4000,()=>{
            console.log('Conexion en el puerto',4000);
        })
    }
}
);

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@proyectos.abuzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());

app.use('/', routes());
