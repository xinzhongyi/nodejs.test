//����eventsģ��
var events = require('events') ;

//����eventEmitter
var eventEmitter = new events.EventEmitter() ;

//�����¼��������
var connectHandle = function connected(){
    console.log('connect success') ;

    //����data_received�¼�
    eventEmitter.emit('data_recevied') ;
}

eventEmitter.on('connection',connectHandle) ;

eventEmitter.on('data_recevied',function(){
    console.log('data recevied success') ;
})

eventEmitter.emit('connection') ;

console.log('end') ;