const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    image: {
        type: String,
        required: true
    },
    strain: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
 
}, { timestamps: true })


module.exports = mongoose.model('product1', productSchema)
