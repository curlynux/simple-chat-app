const auth = require("../../middlewares/auth");
const Message = require("../models/messagesModel");
const WebSocketServer = require("../../websocketServer");

WebSocketServer.on("connection", (ws) => 
{
    ws.on("message", (message) => 
    {
        console.log(`log message: ${message}`);
    });
});

console.log(auth);

module.exports.sendMessage = async (req, res, next) =>
{
    console.log(req.body);
    const message = new Message({})
    return await res.status(201).json(req.body)
}

module.exports.testRoute = (req, res, next) => 
{
    return res.json({data: "hello from message get route !"})
}