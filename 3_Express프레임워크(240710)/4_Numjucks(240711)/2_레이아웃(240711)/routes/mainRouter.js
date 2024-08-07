// 240711(4)

const express = require("express");
const router = express.Router();

// 메인페이지에 접속했을 때!
router.get("/", (req, res)=>{
    //240712(1)
    res.render("main"); // 자: 이미 app.js에서 경로, 확장자 처리했음
})

// 축구페이지에 접속했을 때!
router.get("/soccer", (req, res)=>{
    res.render("soccer"); 
})


// 240712(2)
// 실습
// 자: 야구페이지를 접속했을 때
router.get("/baseball", (req, res)=>{
    res.render("baseball");
})

module.exports = router;