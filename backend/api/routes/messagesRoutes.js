const express = require("express");
const router = express.Router();
const message = require("../controllers/mesageController");
const auth = require("../../middlewares/auth");

router.post("/outmessage", auth, message.sendMessage)