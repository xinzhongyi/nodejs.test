var fs = require('fs') ;

//创建一个可读流
var readerStream = fs.createReadStream('input.txt') ;
//创建一个可写流
var writeStream = fs.createWriteStream('output.txt') ;
//管道读写操作
readerStream.pipe(writeStream) ;

console.log('程序执行完毕') ;