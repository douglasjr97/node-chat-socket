var socket = require('socket.io-client')('http://localhost:3000');
const repl = require('repl');
//const chalk = require('chalk');
//socket.on('connect');
//socket.on('message');

repl.start({
    prompt:'',
    eval: (mensagem) => {
       console.log(`Voce digitou ${mensagem}`)
       //socket.send(mensagem)
    }
})