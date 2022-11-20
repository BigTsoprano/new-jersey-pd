const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userdataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required:true
    },
    street: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
 
    


  
  
}, { timestamps: true })


module.exports = mongoose.model('Userdata', userdataSchema)

