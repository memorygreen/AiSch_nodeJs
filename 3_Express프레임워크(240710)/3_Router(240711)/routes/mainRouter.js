// 240711(1)

// 서버에서 가장 기본이 되는 이정표!
// router 변수에 express 안에 있는 router 기능만 넣어주기!

const express = require("express");
const router = express.Router();
// 경로 수정을 도와주는 모듈
const path = require("path");
const file_path = path.join(__dirname, "../public" ) //자:public 폴더까지 옴

router.get("/", (req, res)=>{
    // main.html 파일을 보여주기!
    // __dirname -> 현재 작성중인 파일을 기준으로 절대경로를 생성
    // res.sendFile(__dirname + "/main.html"); //자:파일 보내줄 때 절대경로 필요
    res.sendFile(file_path + "/main.html"); //자:바뀐 경로로 연결


})

//240711(2)
// 축구 페이지 처리해주기
router.get("/soccer", (req,res)=>{
    res.sendFile(file_path + "/soccer.html");

})

// 야구 페이지 처리해주기
router.get("/baseball", (req,res)=>{
    res.sendFile(file_path + "/baseball.html");

})
// 라우터를 제작하면 반드시 export해줄 것
module.exports = router;
