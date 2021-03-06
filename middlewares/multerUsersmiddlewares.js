const path = require('path');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users')
    },
  
    filename: function (req, file, cb) {
      //   
      cb(null,  Date.now() + '_imagen' + path.extname(file.originalname))
    }
  })
  
  const uploadFile = multer({
    storage: storage
  })

  module.exports = uploadFile
  