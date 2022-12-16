
require('dotenv').config()


//required
const express = require('express')
const userdataRoute = require('./routes/Userdatas')
const productRoute = require('./routes/Productdatas')
const mongoose = require('mongoose')
const cors = require('cors')

//express.js
const app = express()

app.use(cors())

app.use(express.json())



app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})


app.use('/api/Userdata/', userdataRoute)
app.use('/Product/', productRoute)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, ()=> {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })






