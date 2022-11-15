const serverStore = require('../serverStore')
const newConnectionHandler = async (socket, io)=> {
    const userDetails = socket.user
    serverStore.addNewConnectedUser({
        socketid: socket.id,
        userid: userDetails.userId
    })
}
module.exports = newConnectionHandler