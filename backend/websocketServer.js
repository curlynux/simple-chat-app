const wss = require("ws");
const server = new wss.Server({port: 8000});

module.exports = server;