const wss = require("ws");
const server = new wss.Server({port: 8000});

server.on("connection", (ws) => 
{
    console.log("user connected !");
    ws.on("message", (message) => 
    {
        console.log(`message: ${message}`);
    });
    ws.on("close", () => console.log("connexion closed !"))
});

module.exports = server;