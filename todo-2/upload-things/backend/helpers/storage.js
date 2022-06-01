const multer = require('multer');
const path = require('path');
const fs = require('fs');

const diskStorage = multer.diskStorage(
  {
    destination: (req, file,cb) => {
      const imgDir = path.join(__dirname, '../images');

      fs.mkdirSync(path.join(imgDir, file.originalname), { recursive: true })

      cb(null, imgDir);
    },
    filename: (req, file, cb) => {
      const mimeType = file.mimetype.split('/');
      const fileType = mimeType[1];
      const fileName =  `${file.originalname}/${(req.files.length - 1)}.${fileType}`;
      cb(null, fileName);
    }
  }
)

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
}

const storage = multer({ storage: diskStorage, fileFilter: fileFilter }).array('images');

module.exports = storage;
