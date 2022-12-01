
require('dotenv').config()


//required
const express = require('express')
const userdataRoute = require('./routes/Userdatas')
const mongoose = require('mongoose')

//express.js
const app = express()

app.use(express.json())



app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})


app.use('/api/Userdata/', userdataRoute)

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






