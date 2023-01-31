const wss = require("ws");
const express = require("express");
const app = express();
const auth = require("../../middlewares/auth");
const Message = require("../models/messagesModel");

console.log(auth);
module.exports.sendMessage = (req, res, next) =>
{
    console.log(req.body);
    console.log(auth);

    const message = new Message({...req.body});
    res.status === 404
    return res.status(404).json({message: "this error"})
}