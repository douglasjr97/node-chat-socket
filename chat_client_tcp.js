var socket = require('socket.io-client')('http://localhost:3000');
const repl = require('repl')
const chalk = require('chalk')

let usuario = null;

socket.on('connect',() => {
    usuario = process.argv[2]
    console.log(chalk.red(`Usuario ${usuario} acabou de entrar`))
});




socket.on('message', (data) => {
    const {mensagem,usuario} = data;
console.log(chalk.green(`${usuario} disse: ${mensagem}`))
});



repl.start({
    prompt:'',
    eval: (mensagem) => {
       //console.log(`Voce digitou ${mensagem}`)
       socket.send({
        mensagem,
        usuario
       })
    }
})