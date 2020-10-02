const http = require('http').createServer();
const io = require('socket.io')(http)


http.listen(3000, ()=>{console.log('Estou ouvindo')});


io.on('connection', (socket)=>{
    console.log('Cliente conectado', socket.id);

    socket.on('message', (evt)=>{
        console.log(evt)
        socket.broadcast.emit('message', evt)
    })

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado', socket.id);
    })
})