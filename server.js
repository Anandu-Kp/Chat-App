

const express = require("express");
// const { Socket } = require("socket.io");
const app = express();
const server = require("http").Server(app);
app.use(express.static('public'));


const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("connection done", socket.id);

    socket.on('message', (data) => {
        io.emit('message', data);
    })
    socket.on("disconnect", () => {
        console.log(socket.id, " left the chat");
    })
})

const PORT = 9000;
server.listen(PORT, () => {
    console.log("hellooo");
})
