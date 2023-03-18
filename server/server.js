const io = require('socket.io')(3000,{
    cors:{
        origin:['http://localhost:8080' , 'http://localhost:8081']
    }
});

io.on("connection", socket => {
    // console.log(socket);
    console.log(socket.id);
    socket.on("send-message",(message)=>{
        console.log(message);
        // io.emit('recived-message', (message));
        socket.broadcast.emit('recived-message', (message));
    });
    
});