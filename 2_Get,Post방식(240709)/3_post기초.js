// 240709(4)

const http = require('http')
// qs 모듈 -> post 방식에서 데이터를 변형할 때 사용하는 모듈
const qs = require("querystring"); // 자: 쿼리스트링 모듈 
http.createServer((req, res)=>{
    console.log(req.url)
    // post 방식은 url에 데이터를 보내지 않기 때문에, 조회가 불가능
    
    // 240709(4)
    // post방식으로 데이터를 받아올 때는 영역이 2개가 필요(데이터를 처리하는 영역, 처리된 데이터를 활용한 영역)

    // 1. 데이터를 받아올 때!
    let body = ""; //자:post 방식으로 데이터 담는 공간 이름 다 body라고 함
    req.on("data", (data)=>{

        // post데이터는 반드시 문자형태로 변환하는 작업이 필수!
        // get데이터는 하지 않는 이유? -> url에 처음부터 문자형태로 담겨서 넘어온다.
        console.log("Post로 받아온 데이터", data);
        // post로 받아온 데이터는 Buffer 형태로 출력이 된다 -> String타입으로 변형
        body = data.toString();
        console.log("문자로 변환된 데이터", body);

        //2. 문자로 변형된 데이터를 처리하는 노직
        req.on("end", ()=>{
            // 문자 데이터를 객체 형태로 변환하는 작업 -> querystring 모듈을 활용
            let parse_data = qs.parse(body)
            console.log("객체로 변형된 데이터", parse_data);


            // 실습!
            // 사용자에게 h1태그로 "당신의 아이디는 ??? 입니다, 비밀번호는 ??? 입니다" 출력해주기

            //쌤풀이
            res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})
            res.write(`<h1>당신의 아이디는 ${parse_data.id}입니다, 비밀번호는 ${parse_data.pw} 입니다.</h1>`)
            res.end();

        })
    })

   


}).listen(3000)