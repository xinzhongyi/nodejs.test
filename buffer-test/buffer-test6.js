var buf1 = Buffer.from('abcdefghijk') ;
var buf2 = Buffer.from('RUNOOB') ;

//�� buf2 ���뵽 buf1 ָ��λ����
buf2.copy(buf1,2) ;

console.log(buf1.toString()) ;