const express=require('express');
const { PORT } = require('./config/server.config');

const app=express();

// app.get('/',(req,res)=>{
//     res.send("This is for testing /");

// })
// console.log(`PORT is${PORT}`);
app.listen(PORT,(req,res)=>{
    console.log(`Server started at PORT:${PORT}`);
})