const Logger = require('./logger');
const path = require('path');
const os = require('./os');
const fs = require('./fs');
const events = require('./events');

// console.log(fs.files);

// console.log(`Total Memory : ${os.totalMemory}`);
// console.log(`Free Memory : ${os.freeMemory}`);

let pathObj = path.parse(__filename);
//console.log(pathObj);

// console.log(module); 
const logger = new Logger();
//Register a listener
logger.on('messageLogged',(arg)=>{
    console.log('Listerner called 11', arg);
});
logger.log("message from Logger 11");