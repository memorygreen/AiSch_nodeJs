// 240711(3)

const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    // 넌적스 파일을 생성할 때는, render함수 사용하기!
    res.render("main", {name:"김자영"}); // 자:app.js에서 경로 & 확장자까지 세팅해둠 안써도됨
    //자:파일 보여준 다음에 값을 넘겨주세요!(객체에 담아서)
});

module.exports = router;
