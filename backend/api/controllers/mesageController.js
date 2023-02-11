const auth = require("../../middlewares/auth");
const Message = require("../models/messagesModel");
const WebSocketServer = require("../../websocketServer");
const {createWebSocketStream} = require("ws");
WebSocketServer.on("connection", (ws) => 
{
    const duplex = createWebSocketStream(ws, {encoding: "utf8"});
    console.log("user connected !");
    duplex.on("data", (data) => 
    {
        console.log(`data from duplex: ${data}`);
        console.log(data);
        try {
            const object = JSON.parse(data)
            console.log(object);
        } catch (error) {
            console.error(error);
        }
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