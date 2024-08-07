//240712(2)

const express = require("express");
const router = express.Router();
// 메인 페이지 접속 시
router.get('/', (req, res)=>{
    res.render("main")

})

// 로그인 기능 요청 시
router.post('/login', (req, res)=>{
    
    console.log("값 넘어오나 확인", req.body)
    console.log("id:",req.body.id)
    console.log("pw:",req.body['pw'])
    let id =req.body.id
    let pw = req.body.pw
    
    if (id == 'smhrd' && pw == '1234'){
        //성공시
        res.render("success", {id:id});
    }else{
        // 실패시
        res.post("fail");
    }


})

module.exports = router;
