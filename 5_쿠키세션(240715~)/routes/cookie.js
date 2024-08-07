// 240715(5)

/*
    쿠키 : 클라이언트가 브라우저에 저장하는 데이터 공간
    - 쿠키는 서버의 자원을 사용하는 게 아니고, 브라우저의 자원을 사용한다.
    - 쿠키는 사용자가 브라우저를 종료 하더라도, 존재한다!
    - 반드시 만료기간을 셋팅 해준다! (광고 -> 일주일동안 안보기!)
    - 설치 = npm i cookie-parser -> 쿠키데이터를 변환하는 모듈!
    - 주의점!
    - 쿠키를 생성, 삭제 = res를 활용한다!
    - 쿠키를 조회할 때는 req를 활용한다.
    - 쿠키 생성 시, 생명주기 넣어주기! -> 누적이 X
    - 개인정보가 담긴 중요한 데이터는 쿠키에 저장하면 안 된다!
*/


// 240715(6)
const express = require("express");
const router = express.Router();

// 1) 쿠키 등록하기
router.get("/setCookie", (req, res)=>{
    console.log("쿠키 등록하기!");
    // 쿠키를 등록하는 방법
    // res.cookie(key, value)

    res.cookie("nick", "cookieNickName");


    // 1) 쿠키 만료 설정 -> 하지 않으면 계속 브라우저에 존재 -> 성능 저하
    // 방법 - maxAge -> ms 단위로 설정
    res.cookie("name", "hyung", {maxAge : 5000}); //자:5000ms = 5s
    // 자 : name 이라는 key 값에 hyug 이라는 쿠키를 넣음. 근데 생명은 5초
    
    // 방법 - expires -> 현재 날짜 +초*분*시*일
    // - 쿠키의 수명 만료롤 날짜로 설정
    res.cookie("age", "20", {express:new Date(Date.now() + 60*60*24*3)})
    // 자: now() 는 현재시간
    // 자 : 현재 시간 기준으로 3일 뒤에 삭제되겠다 (ex. 광고에서 3일간...7일간 안 보기...)
    res.redirect("/");

})

// 2) 쿠키 확인하기
router.get("/getCookie", (req,res)=>{
    // 쿠키를 불러올 때는 req를 사용한다. (자:이것만 다르다) // 자: 객체형태의 쿠키!
    // 자 : 확인만 request 가 한다!
    console.log("쿠키데이터", req.cookies.nick);
    console.log("쿠키데이터 생명추가", req.cookies.name);
    console.log("쿠키데이터 생명추가2", req.cookies.age);
    
    res.redirect("/");
})

// 3) 쿠키 삭제하기
router.get("/clearCookie", (req, res) => {
    // res 응답이 처리합니다!
    //자 : 등록, 삭제는 response
    res.clearCookie("nick"); //자: nick이라는 쿠키를 지워주세요
    res.redirect("/")
})

module.exports = router;