const express = require('express');
const router = express.Router();
const {staffController} = require("../controllers");
// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './uploads')
//     },
//     filename: function(req, file, cb){
//         cb(null, Date.now() + file.originalname);
//     }
// });
// const fileFilter = (req, file, cb) => {
//     // ACCEPT OR REJECT A FILE
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };

//   const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter
// })

// router.post('/staffRegister',upload.single('file'), staffController.staffRegister)
router.post('/staffRegister', staffController.staffRegister)
router.put('/staffUpdatebyId/:id', staffController.staffUpdateById)
router.get('/staffGetAll', staffController.staffGetAll)
router.get('/staffGetById/:id', staffController.staffGetbyId)
router.delete('/staffDeleteById/:id', staffController.staffDeleteById)




module.exports = router;