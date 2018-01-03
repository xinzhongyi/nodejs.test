var buf = Buffer.alloc(26) ;
for(var i = 0 ; i < 26 ;i++){
    buf[i] = i + 97 ;
}
console.log(buf.toString('ascii')) ; // ���: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5)) ;// ���: abcde
console.log(buf.toString('utf8',0,5)) ;// ���: abcde
console.log(buf.toString(undefined,0,5)) ; // ʹ�� 'utf8' ����, �����: abcde

var buf2 = Buffer.from('www.runobb.com') ;
var json = buf.toJSON(buf2) ;
console.log(json) ;