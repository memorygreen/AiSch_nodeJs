// 240710(3)

const express = require("express")
const app = express();
const bp = require("body-parser") //자:자동완성x -> 설치 필요



//1. 정적파일 등록
app.use(express.static("public"));
// body-parser 등록!
app.use(bp.urlencoded({extended : true})); //자:쿼리스트링으로 바꿔주세요 라는 뜻
//자: 바디파서에서 넘어온 버퍼데이터를 쿼리스트링 형태로 바꿔주세요


//2. 서버 등록
app.get("/",(req, res)=>{
    console.log("서버 생성");
    res.sendFile(__dirname+"/public/로그인.html")
})

// get방식으로 넘어온 데이터 처리
app.get("/getLogin",(req, res)=>{ //자:get함수는 get방식일때 쓰는 함수
    console.log("get방식으로 요청이 들어왔습니다.");
    console.log(req.url);

    // 자: 들어온 정보는 모두 req에 있다
    // get방식으로 넘어온 데이터를 객체로 출력 -> req.query를 출력
    console.log(req.query) //자: query string 가져와!

    // 실습
    // 입력한 id가 "smhrd"이고, 비밀번호가 "1234"라면 -> console 창에 로그인 출력
    // 아니라면 -> console창에 로그인 실패 출력

    //쌤풀이
    if (req.query.id == "smhrd" && req.query.pw == "1234" ){
        console.log("로그인 성공");
        // 성공페이지로 이동

        // 240710(4)
        // redirect -> url 변동 -> 사용자에게 위치가 공개 -> 절대 경로를 보여주면 안 된다.
        // 위에서 static을 public에서 찾도록 작업!
        res.redirect("/성공페이지.html")
        // 자:send file할때(파일을 보내주는개념)는 절대경로였지만 url바꿀때에는 절대경로 들어가면 안됨
        
    }else{
        console.log("로그인 실패");
        // 실패페이지로 이동
        res.redirect("/실패페이지.html")
    }

})


// 240710(4)
//post 데이터 처리
//post 데이터는 buffer 형태의 암호화된 데이터가 넘어온다 -> 문자로 변형 -> 객체 변형
app.post("/postLogin",(req, res)=>{ 
    // bp가 변환한 데이터를 활용
    console.log(req.body) //자:post로 넘어온 데이터는 body에 들어가있다!


})
// 3. 포트 등록 //자: 항상 맨 밑에
app.listen(3000);
