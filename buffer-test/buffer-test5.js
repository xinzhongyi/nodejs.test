var buffer1 = Buffer.from('ABC') ;
var buffer2 = Buffer.from('ABCD') ;

var result = buffer1.compare(buffer2) ;

if(result < 0){
    console.log('buffer1 is buffer2 before') ;
}else if(result == 0){
    console.log('buffer1 is buffer2 equal') ;
}else{
    console.log('buffer1 is buffer2 after') ;
}