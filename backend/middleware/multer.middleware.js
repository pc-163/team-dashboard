import multer from 'multer';
//const upload = multer({ dest: '/assets' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() +'-'+ file.originalname )
    }
  })
  
  export const upload = multer(
    { storage,
      limits: { fieldSize: 1200 * 675 }
  })