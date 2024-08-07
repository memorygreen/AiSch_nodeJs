//240710(1)
// express의 핵심 파일, 몸통, 컨트롤타워, 대장님
// 서버생성, 연결을 시켜주기, 미들웨어 등록 (자:미들웨어==각각 역할 담당하는 담당자)


// 1. express버전으로 서버 생성
const express = require("express");
const app = express(); //자: app이 이제 메인이다! app이 서버가 된다!

// app에게 알려주기! ->미들웨어 등록
// 앞으로 정적인 파일은 public폴더만 보세요!
app.use(express.static("public"));



// 2. 사용자가 접속했을 때 서버를 생성하겠다!
// "/" -> 사용자가 메인페이지로 들어왔을 때! (자:나중에는 경로관련 routes한테 시킬 것)
app.get("/",(req, res)=>{//자:get == create server와 같은 역할 
    console.log("서버가 생성 되었습니다!");
    //240710(2)
    //사용자에게 <h1>환영합니다</h1>
    //res.send("<h1>환영합니다</h1>") //자:write가 express에서는 send // 자:이 방식은 거의 사용x 파일보내줌o

    // 사용자에게 파일로 데이터 보여주기!->fs 모듈과 같은 기능
    // 중요 ★ express에서 경로는 절대 경로를 사용한다(규칙)
    // 현재 작업중인 파일의 절대경로를 알아오는 키워드 -> __dirname
    console.log(__dirname)
    res.sendFile(__dirname + "/index2.html");

    //중요★ express에서 정적인 파일(css,js,img..)은 반드시 public 에서 관리
    // 명령어로 제약 -> app(대장님)에게 반드시 사용자가 정적인 파일 요청하면, public으로 조회하세요!

})

//3. 마지막에 항상 포트번호 등록하기!
app.listen(3000)//자:포트번호 따로 설정
