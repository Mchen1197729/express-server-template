const express = require('express')
const multer = require('multer')

const uni_str = require('../utils/unistr')

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    //获取上传文件的后缀名
    const suffix = file.originalname.split('.').pop()
    cb(null, file.fieldname + uni_str() + '.' + suffix)
  }
})

const upload = multer({storage: storage}).single('avatar')

router.post('/avatar', (req, res) => {
  upload(req, res, error => {
    if (error instanceof multer.MulterError) {
      res.send({
        code: -1,
        msg: 'request error',
        error
      })
    } else {
      res.send({
        code: 0,
        msg: 'request success'
      })
    }
  })
})

module.exports = router
