const wss = require("ws");
const express = require("express");
const app = express();
const auth = require("../../middlewares/auth");
// const Message = require("../models/messagesModel");

console.log(auth);
module.exports.sendMessage = (req, res, next) =>
{
    console.log(req.body);
    return res.json({data: "hello from message post route !"})
}

module.exports.testRoute = (req, res, next) => 
{
    return res.json({data: "hello from message get route !"})
}