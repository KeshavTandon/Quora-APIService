const mongoose =require('mongoose');
const { MONGO_DB_URL } = require('./server.config');


async function connectToDb(){
    try {
        await mongoose.connect(MONGO_DB_URL);
    } catch (error) {
        console.log("Unable to connect to DB");
        console.log(error);
    }
}

module.exports=connectToDb;
