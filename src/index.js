const express=require('express');
const { PORT } = require('./config/server.config');
const connectToDb = require('./config/db.config');

const app=express();

app.listen(PORT,async ()=>{
    console.log(`Server started at PORT : ${PORT}`);
    await connectToDb();
    console.log("Db connected");
});