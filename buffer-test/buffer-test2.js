//����һ������Ϊ10������0����Buffer
var buf = Buffer.alloc(256) ;

var len = buf.write('www.runoob.com') ;

console.log('count='+len) ;
console.log(buf.toString()) ;