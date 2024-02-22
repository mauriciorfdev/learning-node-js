const person = require('./person')
console.log(person);

const Logger = require('./logger');

const logger = new Logger();
logger.on( 'message', (data) => console.log('LISTENER: ',data) )

logger.log('Hello World')