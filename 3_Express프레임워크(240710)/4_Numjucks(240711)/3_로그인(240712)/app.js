// 240712(3)
//쌤풀이
const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const mainRouter = require("./routes/mainRouter")
const bp = require("body-parser")

// app에게 post데이터 처리방식 등록
app.use(bp.urlencoded({extended : true}))

// app에게 라우터 등록 
app.use('/', mainRouter);

// 넌적스 뷰엔진 등록
app.set("view engine", "html");
nunjucks.configure("views",{ //views폴더에 있는 파일을 사용하겠다
    express : app,
    watch : true
})

// 포드번호 등록
app.listen(3000);