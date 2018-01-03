var events = require('events') ;
var eventEmitter = new events.EventEmitter() ;

var listener1 = function(){
    console.log('listener1 start') ;
}

var listener2 = function(){
    console.log('listener2 start') ;
}

eventEmitter.on('connection',listener1) ;

eventEmitter.on('connection',listener2) ;

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection') ;

console.log(eventListeners +' count listener') ;

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1) ;
console.log('listener1 end') ;

eventEmitter.emit('connection') ;

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection') ;
console.log(eventListeners +' count listener') ;

console.log('end') ;