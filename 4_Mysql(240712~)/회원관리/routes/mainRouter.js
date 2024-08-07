// 240712(4)

const express = require("express")
const router = express.Router();

// 사용자가 메인에 도착했을 때!
router.get("/", (req, res)=>{

    // 세션값을 꺼내오기  (240717(2)) 
    // 값을 넘길 때는 반드시 조건을 달아주자

    if(req.session.nick){  
        res.render("main", {nick : req.session.nick }) //자: main.html로 세션에있는 nick이라는 값을 보내주기(240717(2))
    }else{
        res.render("main") 
    }
})

//240715(1)
// 사용자가 회원가입을 요청했을 때!
router.get("/join", (req, res)=>{
    res.render("join");

})

// 240715(2)
// 사용자가 로그인을 요청했을 때
router.get("/login", (req, res)=>{
    res.render("login");
})


//240715(4)
// 사용자가 정보 수정을 요청했을 때
router.get("/update", (req,res)=>{
    res.render("update");
})

// 240715(4-5)
// 사용자가 삭제를 요청했을 때 
router.get("/delete", (req, res)=>{
    res.render("delete");
})

module.exports = router;
