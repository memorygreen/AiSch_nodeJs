// 240709(3) 

const { table } = require('console');
const http = require('http');
const url = require('url');

http.createServer((req, res)=>{
    //1. 프론트에서 넘어온 값을 url모듈을 활용해서 객체 형태로 변환
    let url_qs = url.parse(req.url, true).query;
    let num = Number(url_qs.num);

    // 2. 페이지에 입력한 숫자만큼 td 태그를 생성해서, 사용자에게 제공
    res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"}) //자:html문서 정보 필요 //자:통신성공(200) 시 

    // 자: 반복x 고정된 부분 부터 만들기
    res.write("<table border='1px solid balck'>")
    res.write("<tr>")
    
    // 반복해서 입력한 값 만큼 td생성 (for), 백틱!(자:한문장)
    for (i=1; i<=num; i++){
        // res.write("<td>")
        // res.write(i) // 자: 문자열만 들어갈수있는 함수인듯!! -> 타입에러남!
        // res.write("</td>")
        res.write(`<td border='1px solid black'>${i}</td>`)
    }
    
    res.write("</tr>")
    res.write("</table>")

}).listen(3000);

// 백엔드 코드를 작성할 때 순서! 매우 중요!
//1. node는 모듈화 되어있는 프로그래밍 방식 -> 필요한걸 내가 직접 작성해야 한다.
//2. 코드를 작성할 때, 반드시 큰 영역부터 작성할 것 ex) 서버생성, 포트 연결, 태그 생성
//3. 반복문이 필요한 경우에는, 반복하지 않은 코드부터 작성하기
