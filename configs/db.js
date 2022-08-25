const mongoose = require('mongoose');

module.exports = async ()=>{
    try {
    mongoose.connect('mongodb+srv://udit:udit@cluster0.v61ph.mongodb.net/db?retryWrites=true&w=majority')
        
    } catch (error) {
        console.log("err :", error);
    }
}