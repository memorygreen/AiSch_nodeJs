// 240708 (3)
// 접속한 사용자의 ip를 체크
const http = require('http');

const userip = require('request-ip'); //자: 자동완성x -> npm install 필요 (+package.json설명)

// 자:서버 생성
http.createServer((req, res)=>{
    // req역할 파악 -> 클라이언트가 넘겨준 정보를 담고 있는 공간 (접속시간, 접속장소, ip, 데이터)
    // 자용자의 접속 ip 확인
    let ip = userip.getClientIp(req); //자:사용자가 넘겨준 모든 정보 req에 담겨있음. 그 중 ip주소만 가져오는 것임
    // ip앞에 붙어있는 불필요한 7글자를 삭제
    let req_ip = ip.substring(7); //자: 앞에 6글자 없애겠다 ()::ffff:)
    console.log(ip);
    // 실습 -> 족너문 활용
    // 1. 내 짝꿍의컴퓨터가 접속하면 console.log("짝꿍님 환영합니다!");
    // 2. 그 외 다른 사람이 접속하면 "다른 사람은 나가세요!"
    // ip를 조회할 때는 ip모듈과 req를 활용한다!
    if (req_ip == '192.168.21.48'){
        console.log("짝꿍님 환영합니다!");
    }else if (req_ip == '192.168.20.13'){
        console.log("자영님 환영합니다!");
    }else{
        console.log("다른 사람은 나가세요!");
    }
        

}).listen(3000);