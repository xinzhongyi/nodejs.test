var http = require("http") ;

http.createServer(function(request,response){

    //���� HTTPͷ��
    //Http ״ֵ̬��200 ��ok
    //�������� text/plain
    response.writeHead(200, {'Content-Type':'text/plain'}) ;

    //������Ӧ���� "Hello World"
    response.end("Hello World\n") ;
}).listen(8888);

console.log("Serve running at http://127.0.0.1:8888/") ;