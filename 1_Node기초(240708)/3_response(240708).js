// 240708(4)

const http = require('http');

http.createServer((req, res)=>{
    // req(클라이언트), res(서버)
    // 사용자가 서버에 접속하면 <h1>태그로 접속을 환영합니다!
    // 1. 헤드 정보에 한글 인코딩
    //자: res.writeHead(응답코드, )
    // 응답코드 200 400, 500
    // 200 -> 통신에 성공!
    // 400, 500 -> 통신에 실패! -> 400(클라이언트, 프론트엔드), 500(서버,백엔드)
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"}) //자: " " 안의 공백만 달라도 에러남! 오타에 주의!
    let html = `
        <h1>반가워요!</h1>
        <h2>반가워요!</h2>
        <h3>반가워요!</h3>
        <h4>반가워요!</h4>
        <h5>반가워요!</h5>
    
    `
    res.write(html);
    res.end //자: 응답이 끝났다고 알려줘야함! ->그래야 로딩 끝남


    // 서버를 생성하고 응답을 할 때 주의점!
    // 1. 한글을 지원하려면 반드시 인코딩해주기 -> writeHead
    // 2. 응답이 끝나면 반드시 end()를 사용해주기 -> 무한로딩이 안 된다!
    

}).listen(3000)