const jwt = require('jsonwebtoken') 

const config = process.env

const verifyTokenSocket = (socket, next)=> {
    const token = socket.handshake.auth?.token
    console.log('token',token);
    try{
        const decoded = jwt.verify(token, config.JWT_SECRET)
        console.log(decoded);
        socket.user = decoded
        next()
    }
    catch(err){
        const socketError = new Error('NOT_AUTHORIZED')
        return next(socketError)
    }
}
module.exports = verifyTokenSocket