const express = require("express");
const router = express.Router();
const message = require("../controllers/mesageController");
const auth = require("../../middlewares/auth");

// router.post("/message", auth, message.sendMessage);
// router.get("/message", message.testRoute);
router.get("/friends", auth, message.friends);
module.exports = router;