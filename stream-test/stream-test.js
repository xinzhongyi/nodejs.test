var fs = require('fs') ;
var data = '' ;

//�����ɶ���
var readerStream = fs.createReadStream('input.txt') ;

//���ñ���utf8
readerStream.setEncoding('UTF8') ;

readerStream.on('data',function(chunk){
    data += chunk ;
})

readerStream.on('end',function(){
    console.log(data) ;
})

readerStream.on('error',function(err){
    console.log(err.stack) ;
})

console.log('end') ;