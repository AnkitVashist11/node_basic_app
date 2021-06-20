
const EventEmitter = require('events');


const url = "http://mylogger.io/log";

class Logger extends EventEmitter {
     log(message){
        // Send a HTTP Request
        console.log(message);
        this.emit('messageLogged', {id : 1, url:'http://ankit'});
    }
}

// we are exporting a single object which have a method log on it
module.exports = Logger;