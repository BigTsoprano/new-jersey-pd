const product1 = require('../models/productModel')
const mongoose = require('mongoose')


// get all products
const getProducts = async (req, res) => {
   const product = await product1.find({}).sort({createdAt: -1})
   res.status(200).json(product)
}



// get a single product
const getProduct = async (req, res) => {
const { id } = req.params

if (!mongoose.Types.ObjectId.isValid(id)) {
return res.status(404).json({error: 'no such user'})

}

const product = await product1.findById(id)

if (!product) {
   return res.status(404).json({error: 'no such product'})     
   
   }
   res.status(200).json(product)   

}



//create new user
const createProduct = async (req, res) => {
   const { name, price, image, strain, quantity, type } = req.body

   try{
       const product = await product1.create({ name, price, image, strain, quantity, type })
       res.status(200).json(product)
   } catch (error) {
       res.status(400).json({error: error.message})
   }
  

}


// delete a user

const deleteProduct = async (req, res) => {
   const { id } = req.params
 
   if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(400).json({error: 'No such product'})
   }
 
   const product = await product1.findOneAndDelete({_id: id})
 
   if(!product) {
     return res.status(400).json({error: 'No such user'})
   }
 
   res.status(200).json(product)
 }



// update a user

module.exports = {
   getProducts,
   getProduct,
   createProduct,
   deleteProduct
}