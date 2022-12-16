
//636d758e743f2bb3908f44d6

const express = require('express')
const {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct
} = require('../controllers/productController')

const router = express.Router()

// this is to get user data
router.get('/', getProducts)

// Get a single user

router.get('/:id', getProduct)

// Post a new user
router.post('/', createProduct)


//DELETE a user
router.delete('/:id', deleteProduct)

// UPDATE a user
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE  a product'})
})

//router.get('/hellp', () => {})


module.exports = router
