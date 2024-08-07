// 240709(1)

const http = require('http');
const url = require("url"); // 자 : url모듈

http.createServer((req, res)=>{
    // 1. 사용자가 넘긴 url 데이터를 조회 -> get방식은 url에 데이터를 동반해서 보내기 때문에!
    console.log(req.url) 

    // 240709(2)
    // 2.넘겨받은 String 형태의 데이터를 컴퓨터가 조회할 수 있게 qs 방식으로 변경!
    // - queryString = url 뒤에 ?라고 적혀있는 데이터들 -> url에 데이터를 동반해서 보낸다!
    // url모듈을 활용해서 String 데이터를 Object데이터로 변환
    let url_qr = url.parse(req.url, true).query; //자: req안에 있는 url 값을 쿼리스트링으로 바꿔줘 (get방식에서 필수인 한 문장)
    console.log("변형된 데이터 : ", url_qr);


    // 실습1
    // 콘솔창에 num1과 num2 의 더한 값을 출력!
    // 쌤풀이
    console.log(parseInt(url_qr.num1) + parseInt(url_qr.num2));
    
    //실습2
    // 1. 클라이언트에게 num1, num2, opr 받기
    let num1 = Number(url_qr.num1);
    let num2 = Number(url_qr.num2);
    let opr = url_qr.opr;
   
    // 2. opr의 값에 맞게 연산을 진행 +면 +연산, - 면 -연산
    // 자영풀이
    if (opr == '+') {
        console.log(num1 + num2)
    } else if (opr == '-') {
        console.log(num1 - num2)
    } else if (opr == '*') {
        console.log(num1 * num2)
    } else if (opr == '/') {
        console.log(num1 / num2)
    }
    
}).listen(3000)

