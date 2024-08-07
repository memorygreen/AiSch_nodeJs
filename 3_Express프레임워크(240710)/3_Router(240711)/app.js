// 240711(1)

/*
    라우터
    메인서버가 모든 경로에 대한 처리를 하기는 부담스럽다. -> 페이지가 많아지면 경로도 증가!
    - 각각의 경로에 관련된 일들은 라우터가 처리하겠다!
    - app에게 사용할 라우터만 등록

*/ 

const express = require("express");
const app = express();

const mainRouter = require("./routes/mainRouter")
const subRouter = require("./routes/subRouter"); //240711(2)

// app (에게) 알려주기
// 매인 경로로 들어오는 모든 요청은 mainRouter이 할거에요
app.use("/", mainRouter); //자:누군가 메인 호출하면 mainRouter 데려와
app.use("/minor", subRouter);//240711(2)



app.listen(3000);