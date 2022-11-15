const connectedUsers = new Map()
const addNewConnectedUser = ({socketId, userId})=> {
    connectedUsers.set(socketId, {userId})
    console.log('new connected users', connectedUsers);
}

module.exports = {
    addNewConnectedUser
}