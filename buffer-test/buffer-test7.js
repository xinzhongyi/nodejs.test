var buffer1 = Buffer.from('runoob');
// ���л�����
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
console.log(buffer1.toString()) ;