//This file will handle connection logic to the MongoDB database
const e = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected to MongoDB sucessfully:)");
}).catch((e)=>{
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

//To prevent deprectation warnings (from MongoDB native driver)
//mongoose.set('useCreateIndex', true);
//mongoose.set('useFindAndModify', false);
mongoose.exports = {
    mongoose
}