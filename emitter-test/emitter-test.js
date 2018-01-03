//引入events模块
var events = require('events') ;

//创建eventEmitter
var eventEmitter = new events.EventEmitter() ;

//创建事件处理程序
var connectHandle = function connected(){
    console.log('connect success') ;

    //触发data_received事件
    eventEmitter.emit('data_recevied') ;
}

eventEmitter.on('connection',connectHandle) ;

eventEmitter.on('data_recevied',function(){
    console.log('data recevied success') ;
})

eventEmitter.emit('connection') ;

console.log('end') ;