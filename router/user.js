const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
  res.send({code: 0, msg: 'request success'})
})

module.exports = router
