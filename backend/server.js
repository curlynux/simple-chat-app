const http = require("http");
const express = require("express");
const app = require("./app.js");

const normalize_port = val =>
{
    const port = parseInt(val, 10);

    if(isNaN(port))
        return val;
    if(port >= 0)
        return port;

    return false;
}

const port = normalize_port(process.env.PORT || 8080)
app.set("port", port);

const error_handler = error =>
{
    if(error.syscall !== "listen")
        throw error;

    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe" + addr: "port" + port;

    switch(error.code)
    {
        case "EACCES":
            console.error(`${bind} high privilege required !`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const server = http.createServer(app);
const { networkInterfaces  } = require("os");

server.on("error", error_handler);
server.on("listening", () =>
    {
        const address = server.address();
        const bind = typeof addr === "string" ? "pipe" + addr: "port:" + port;
        server.listen(port, "0.0.0.0");
    });
