// 240712(2)

// 자영풀이
const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const mainRouter = require("./routes/mainRouter_jy");
const bp = require("body-parser") // post처리 시 parser


// body parser 등록하기 (순서 중요 먼저 올것!!)
app.use(bp.urlencoded({extended : true}))

// 라우터 등록하기
app.use('/', mainRouter);




// 넌적스 설정 2가지
app.set("view engine", "html");
nunjucks.configure("views",{ //views폴더에 있는 파일을 사용하겠다
    express : app,
    watch : true
})

// 포드번호 등록
app.listen(3000);




