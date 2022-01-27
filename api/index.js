const router = require('express').Router()

router.use('/users', require('./user'))
router.use('/friends', require('./friend'))


module.exports = router