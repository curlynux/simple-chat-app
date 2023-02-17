const app = require("./app");
const server = require("http").Server(app)

const normalize_port = val =>
{
    const port = parseInt(val, 10);

    if(isNaN(port))
        return val;
    if(port >= 0)
        return port;
    return false;
}

const port = normalize_port(process.env.PORT)
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

server.on("error", error_handler);
server.listen(process.env.PORT, "0.0.0.0")
server.on("listening", () =>
    {
        const address = server.address();
        const bind = typeof addr === "string" ? "pipe" + addr: "port:" + port;
        console.log(`server is running on: ${server.address().address}`);
    });



    var ifs = require('os').networkInterfaces();
    var result = Object.keys(ifs)
      .map(x => [x, ifs[x].filter(x => x.family === 'IPv4')[0]])
      .filter(x => x[1])
      .map(x => x[1].address);
      console.log(`server running on local address: ${result[0]}:${port}, \nnetwork address: ${result[1]}:${port}`);