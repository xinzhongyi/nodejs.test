var buf1 = Buffer.from('cai niao jiao cheng') ;
var buf2 = Buffer.from('www.runoob.com') ;
var buf3 = Buffer.concat([buf1,buf2]) ;
console.log("buf3="+buf3.toString()) ;