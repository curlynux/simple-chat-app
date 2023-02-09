const auth = require("../../middlewares/auth");
const Message = require("../models/messagesModel");
const {WebSocket, createWebSocketStream} = require("ws");
const ws = new WebSocket("ws://[::]:8000");
const duplex = createWebSocketStream(ws, {encoding: "utf8"});

ws.on("open", () => 
{
    try {
        console.log("this is from server")
        duplex.on("data", (data) => 
        {
            console.log(`data stream from messageController: ${data}`)
        });
    } catch (error) {
        console.error(error);
    }
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