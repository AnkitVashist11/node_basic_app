const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',(arg)=>{
    console.log('Listerner called', arg);
});

//raise an event
// emitter.emit('messageLogged', {id : 1, url:'http://ankit'});

