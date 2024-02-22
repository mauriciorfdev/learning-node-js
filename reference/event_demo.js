const EventEmitter = require('events')
//Create class
class MyEmitter extends EventEmitter {}

//Init Class
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on( 'event', () => console.log('Event Fired!') )

//INIT EVENT
myEmitter.emit('event')
myEmitter.emit('event')