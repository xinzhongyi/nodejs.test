//创建一个长度为10，且用0填充的Buffer
var buf = Buffer.alloc(256) ;

var len = buf.write('www.runoob.com') ;

console.log('count='+len) ;
console.log(buf.toString()) ;