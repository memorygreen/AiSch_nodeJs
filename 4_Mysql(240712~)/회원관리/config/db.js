// 240712(4)

// 디비와 연결정보를 관리하는 공간
const mysql = require("mysql2"); //자:혹시 충돌날 지 모르니까 mysql2 버전 사용

// DB연결정보를 설정
const conn = mysql.createConnection({ //자:여러 다른 값 넣으니까 객체가 좋다
    host : "localhost",
    port : 3306,
    user : "root",
    password : "1234", //자: 실제로는 암호화해서 숨김
    database : "nodejs" //자: 특정 db에 연결해야하니 db이름도 알려줘야함
});

// 연결 진행!
conn.connect();
console.log("디비연결!")

// 자 : 경로를 받아서 디비에 넣어줘! => 라우터가 할 일(o) app이 할일(x)

// 자: 우리가 만든 코드, 다른데서 사용하고 싶다? ->exports 필수~
module.exports = conn;