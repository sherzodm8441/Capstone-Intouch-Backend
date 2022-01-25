const router = require('express').Router()

router.use('/roots', require('./root'))
router.use('/friends', require('./friend'))


module.exports = router