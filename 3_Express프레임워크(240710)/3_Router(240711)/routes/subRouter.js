// 240711(2)

const express = require("express");
const router = express.Router();

// 경로 수정을 도와주는 모듈
const path = require("path");
const file_path = path.join(__dirname, "../public" )


// 자:minor 로 들어 왔을때
router.get("/", (req, res)=>{
    res.sendFile(file_path + "/minorMain.html");

})


// 자: fising
router.get("/fishing", (req, res)=>{ //자:minor는 app.js에서 처리해서 안써도 됨
    res.sendFile(file_path + "/fishing.html");

})

module.exports = router;
