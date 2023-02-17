const auth = require("../../middlewares/auth");
const Message = require("../models/messagesModel");
const WebSocketServer = require("../../websocketServer");
const {createWebSocketStream} = require("ws");
const User = require("../models/userModel");

WebSocketServer.on("connection", (ws) => 
{
    console.log("user connected !");
    const duplex = createWebSocketStream(ws, {encoding: "utf8"});
    duplex.on("data", (data) => 
    {
        console.log(data);
    });
    ws.on("message", (message) => 
    {
        try {
            const object = JSON.parse(message);
            console.log("MESSAGE 2",object);
            // const msg = new Message(object);
            // msg.save().then(() => console.log("msg saved !"));
        } catch (error) {
            console.error(error)
        }
    });
   
});

module.exports.friends = (req, res, next) => 
    User.find().then((user) => res.status(200).json(user));