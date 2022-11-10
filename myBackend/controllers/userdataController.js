 const Userdata = require('../models/userdataModel')
 const mongoose = require('mongoose')


 // get all userdata
const getUserdatas = async (req, res) => {
    const userdatas = await Userdata.find({}).sort({createdAt: -1})
    res.status(200).json(userdatas)
}



 // get a single user
const getUserdata = async (req, res) => {
const { id } = req.params

if (!mongoose.Types.ObjectId.isValid(id)) {
return res.status(404).json({error: 'no such workout'})

}

const userdata = await userdata.findById(id)

if (!userdata) {
    return res.status(404).json({error: 'no such userdata'})     
    
    }
    res.status(200).json(userdata)   

}



 //create new user
const createUser = async (req, res) => {
    const {title} = req.body

    try{
        const userdata = await Userdata.create({title})
        res.status(200).json(userdata)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
   

}



 // update a user

module.exports = {
    getUserdatas,
    getUserdata,
    createUser
}