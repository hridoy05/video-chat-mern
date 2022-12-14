const authSocket = require('./middleware/authSocket');
const disConnectHandler = require('./socketHandler/disConnectHandler');
const newConnectionHandler = require('./socketHandler/newConnectionHandler');

const registerSocketServer = (server)=> {
    const io = require('socket.io')(server, {
        cors: {
            origin:"*",
            methods:['GET','POST']
        }
    })
    io.use((socket, next)=> {
        authSocket(socket, next)
    })
    io.on("connection", (socket)=> {
        console.log("user connected", socket.id, );
        newConnectionHandler(socket, io)
        socket.on('disconnect', ()=> {
            disConnectHandler(socket)
        })
    })
}

module.exports = {registerSocketServer}