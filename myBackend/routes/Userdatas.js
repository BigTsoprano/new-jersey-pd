
//636d758e743f2bb3908f44d6

const express = require('express')
const {
    createUser,
    getUserdatas,
    getUserdata,
    deleteUserdata
} = require('../controllers/userdataController')

const router = express.Router()

// this is to get user data
router.get('/', getUserdatas)

// Get a single user

router.get('/:id', getUserdata)

// Post a new user
router.post('/', createUser)


//DELETE a user
router.delete('/:id', deleteUserdata)

// UPDATE a user
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE  a user'})
})

//router.get('/hellp', () => {})


module.exports = router
