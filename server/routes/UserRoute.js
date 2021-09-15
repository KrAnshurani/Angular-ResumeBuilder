const express = require('express')
const user = require('../client/UserController')
const router = express.Router()

const { authMiddleware } = require('../client/UserController')


router.post('/register', user.register)

router.patch('/profileUpdate', user.profileUpdate)

router.post('/login', user.login)

router.get('/profile', authMiddleware, function (req, res) {
  res.json({ 'access': true })
})

// router.post('/resume',user.resumebuilder)
module.exports = router
