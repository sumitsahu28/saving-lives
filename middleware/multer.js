const multer = require("multer");

// define disk storage strategy for multer
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "./upload");
  },
  filename(req, file, callback) {
    const fieldName = (file.fieldname.replace(/\s/g, ''));
    const originalName = (file.originalname.replace(/\s/g, ''));
    callback(null, `user-${fieldName}-${Date.now()}-${originalName}`);
  },
});

const upload = multer({ storage });

const singleFile = function (key) {
    return upload.single(key);
};

const multiFile = function (key) {
  return upload.array(key);
};

// Export modules
module.exports = {
  singleFile,
  multiFile,
};
