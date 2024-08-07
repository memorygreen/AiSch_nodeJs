// 240708(4)
// file system 모듈을 활용해서 직접 작성한 글이 아닌, 파일을 리턴해주자!
// 1. 보안을 신경쓰기 위해서
// 2. 코드의 유지보수, 확장성 위해서
const http = require('http');
const fs = require('fs').promises; // 비동기 처리를 위한 데이터로 받아오겠다!(promise)


http.createServer(async (req, res)=>{
    // 1. 우리가 만든 리턴.html 파일을 읽어와!
    let html = await fs.readFile("./4_리턴(240708).html"); //자 : 파일 읽기(오래걸리는작업)
    res.writeHead(200 ,{"Content-Type" : "text/html; charset=utf-8"})//자: 인코딩설정
    res.write(html);// 자 : 불러들인 파일통해 작성
    res.end();

}).listen(3000)