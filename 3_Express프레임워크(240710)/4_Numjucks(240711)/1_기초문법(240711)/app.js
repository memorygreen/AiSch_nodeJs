// 240711(3)

/*
    넌적스(템플릿 엔진) 쓰는 이유?
    - HTML 페이지는 정적인 페이지 (변화가 없는 페이지)
    - 사용자마다 각각 페이지를 만들어 주는 건, 불가능!
    - 그러면 서버가 템플릿(페이지 1개)을 가지고, 페이지를 제작해라!
    - 템플릿 엔진 (nunjucks, ejs, pug 등등)
    - 넌적스 장점 : HTML코드에 JS코드를 더해서 사용한다!

    넌적스를 쓰기 위해서는?
    1) 설치 : npm i numjucks, npm i numjucks chokidar
    2) views 폴더 생성 -> 동적인 HTML 파일 생성
*/

const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const nunjucks = require("nunjucks")

// 라우터 등록
app.use("/", mainRouter);

// 1. 넌적스 셋팅
// - 뷰엔진 설정, 넌적스 설정 코드는 반드시 필요하다! ★
app.set("view engine", "html"); // 자:(views폴더 안에 있는 파일들) nunjucks통해서 동적페이지 만들것->보여지는 파일의 확장자는 html이다!

// 2. 넌적스를 쓸 때 조회할 정보들
nunjucks.configure("views",{  //자:views 라는 폴더에 있다
    express : app, //자: express는 app이 담당 중
    watch : true // 자: 지켜볼까요?->yes // 자: 파일이 바뀌는 걸 지켜보세요 
});

app.listen(3000);


