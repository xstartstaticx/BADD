const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./server/media");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     let extension = "";
//     if (file.mimetype.includes("image")) extension = file.mimetype.slice(6);
//     console.log(extension);
//     cb(null, file.fieldname + "-" + Date.now() + "." + extension);
//   },
// });
// const upload = multer({ storage: storage });
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/list", userController.list);
router.delete("/delete/:id", userController.delete);
router.get("/findOne/:id", userController.findOne);
router.patch("/edit", userController.edit);
router.post("/adduser", userController.addUser);
module.exports = router;
