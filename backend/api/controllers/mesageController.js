const auth = require("../../middlewares/auth");
const Message = require("../models/messagesModel");
const WebSocketServer = require("../../websocketServer");
const {createWebSocketStream} = require("ws");
// const ws = require("ws");

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
            console.log(object);
        } catch (error) {
            console.error(error)
        }
    });
   
});

module.exports.sendMessage = async (req, res, next) =>
    {
        console.log(req.body);
        // const message = new Message({})
        
        ws.on("message", (message) => 
        {
            console.log(`new message ${message}`);
        });
        return await res.status(201).json(req.body)
    }


    module.exports.testRoute = async (req, res, next) => 
    {
        console.log("TEST ROUTE");
        return await res.status(200).json({message: "test route !"})
    }