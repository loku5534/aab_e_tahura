const multer = require("multer");
const path = require("path");

// Step 1: Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/")); // Specify the destination folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now(); // Get the current timestamp
    const fileExtension = path.extname(file.originalname); // Extract the file extension
    const filename = `${timestamp}${fileExtension}`; // Concatenate the timestamp and file extension
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
