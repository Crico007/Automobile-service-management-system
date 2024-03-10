const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

//object for express//

const app = new express();
app.use(express.json());
app.use(cors());



const client = new MongoClient('mongodb+srv://admin:admin@cluster0.cu7xgp0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();
const db = client.db('SDP-26');
const col = db.collection('Automobile');










app.get('/home',(req,res)=>{

    res.send("Home Page");
})
app.post('/insert',(req,res)=>{
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Succesfully Submitted");

})

app.listen(8081);
console.log("Server Running....");


app.get('/showall',async(req,res) => {
    const result = await col.find().toArray();
    res.send(result);
})