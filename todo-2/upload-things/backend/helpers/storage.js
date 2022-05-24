const multer = require('multer');
const path = require('path');

const diskStorage = multer.diskStorage(
  {
    destination: (req, file,cb) => {
      const directory = path.join(__dirname, '../images', file.originalname);
      console.log('directory', directory);

      cb(null, directory);
    },
    filename: (req, file, cb) => {
      
      const mimeType = file.mimetype.split('/');
      const fileType = mimeType[1];
      const fileName = file.originalname + '.' + fileType;
      cb(null, fileName);
    }
  }
)

const fileFilter = (req, file, cb) => {
  const allowedMimeTYpes = ["image/png", "image/jpeg", "image/jpg"];
  allowedMimeTYpes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
}

const storage = multer({ storage: diskStorage, fileFilter: fileFilter }).array('images');

module.exports = storage;
