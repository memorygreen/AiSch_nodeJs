// 2404715(1)

// 회원 정보를 DB에 연결해서 관리하는 라우터
const express = require("express")
const router = express.Router();
const conn = require("../config/db") // 자:db연결 //240715(2)

// 1. 회원가입 
router.post("/join", (req,res)=>{// 자:user는 app에서 감지, user 다음 경로부터 적기
        // 1. 프론트에서 넘어온 데이터 확인하기!
        // * 포스트로 넘긴 데이터는 req 안에 body로 존재한다!
        console.log("넘어온 데이터 : ", req.body);
        
        // 240715(2)
        let {id, pw, nick} = req.body; // 자:컬럼 순서대로 값 꺼내기

        //2.DB와 연결해서 데이터 처리
        // 1) 처리할 sql문장
        // 2) 입력할 데이터가 필요한 경우 -> 값을  넣어주기!
        // 3) 처리할 콜백함수
        let sql = "insert into member values (?,?,?)" // 자: 뭘 넣을 지 모르니까 ? ※자:컬럼 개수만큼 물음표 넣기
        conn.query(sql, [id, pw, nick], (err, rows)=>{ // <-자 : 중요한건 db연결 코드 이부분만 잘 하면 된다~
                // 자: db연결하는 conn 함수에 명령하기
                //자 :1)sql문 , 2)?데이터의 위치 필요, 3)콜백함수
                // 자: 에러다면 err에 성공하면 rows에 넣어줘
                console.log("디비 insert : ", rows);

                if(rows){
                        // 가입에 성공했을 대, 메인으로 이동!
                        res.redirect("/") //자 : main 이라는 경로는 만든적이 없다! '/'로 이동해야함!

                }else{
                        // 가입에 실패했을 때, 
                        // 자: alert는 프론트에서 보여주는 것! 여기는 백이다!
                        res.send("<script>alert('회원가입 실패')</script>") //자: send 안에는 html 이 들어가야함! html 안에서 js 쓰고 싶으면 script 태그를 써줘야한다!
                }
        }) 
})

// 240715(3)
// 2. 로그인하는 로직
router.post("/login", (req,res)=>{
        // 사용자가 보낸 id,pw로 DB를 검증하는 로직
        console.log("넘어온 데이터", req.body);
        let {id, pw} = req.body;
        

        // 실습!
        // 1. sql 쿼리문 작성 -> select 활용 조건 (id =? and pw =?)
        // 2. conn 쿼리문 실행 (sql,[데이터], (err,rows))
        // 3. id와 pw가 일치하면 콘솔창에 로그인 성공! / 불가능 로그인 실패
        // * select문을 실행할 때 반드시 rows의 length로 조건을 부여할 것!
        // * why ? 조건이 성립하면 데이터가 들어있는 배열 리턴, 성립하지 않으면 데이터가 비어있는 배열 리턴
        // * then ? 반드시 데이터의 길이가 0보다 크다 == 데이터가 담겨있다!

        let sql = "select * from member where id = ? and pw =?"
        conn.query(sql, [id, pw], (err, rows)=>{
                console.log("DB연결 결과 :", rows) //자 : 올바른 결과는 rows에 담김

                // if(rows){ // 자: select 결과가 틀려도 [] 비어있는 리스트가 rows로써 존재해서 if문을 탐
                if(rows.length>0){ // 자 :
                        console.log("로그인 성공")

                        // (240717(1)) 사용자의 닉네임 정보를 세선에 저장
                        // 사용자의 데이터는 DB에서 조회했기 때문에, rows 변수에서 데이터 꺼내기!
                        req.session.nick = rows[0].nick;
                        
                        res.redirect("/");
                }else{
                        console.log("로그인 실패")

                }
        })
        
})

// 240715(4)
// 3. 회원정보 수정
router.post("/update", (req, res)=>{
        // 자: 1) 확인 - 데이터가 올바르게 넘어왔는지!
        console.log("수정 전 데이터 확인", req.body);
        let {id, pw, nick} = req.body;

        // 쿼리문 생성
        // update문을 활용해서 조건을 부여할 때는 affectedRows을 활용할 것!
        // why? 조건이 잘못되더라도, 응답은 넘어온다 -> affected : 0
        // then ? 조건을 부여할 때 affected > 0 -> 영향을 받은 행이 존재한다.
        let sql = "update member set nick =? where id = ? and pw = ? "
        conn.query(sql, [nick, id, pw], (err, rows)=>{
                console.log(rows); // 자: select 랑 비슷한 상태

                // if(rows){ // 자 : 무조건 성공함수로 빠짐 
                if(rows.affectedRows>0){ // 자: 영향받은(수정된) 해잉 0보다 클때 ->성공
                        console.log("변경 성공")
                        res.redirect("/")
                }else{
                        console.log("변경 없음")
                }



        })

})


// 240715(4-5)
//자: 4. 회원정보 삭제
router.post("/delete", (req, res)=>{
        let {id, pw }= req.body
        let sql = "delete from member where id = ? and pw = ?"
        conn.query(sql, [id, pw], (err,rows)=>{
                if(rows.affectedRows>0){
                        console.log("삭제완료!")
                        res.redirect("/");
                }else{
                        console.log("회원탈퇴 실패!")
                }
        })

})


// 240717(2)
// 로그아웃 실습
// 자영 실습
router.get("/logout", (req, res)=>{
        req.session.destroy(); // 자: 세션 파괴 // 자: 리퀘스트 안에 있는 세션을 지워줘
        // req.session.nick = ""; // 자: 공백으로 세션 파괴
        res.redirect("/"); // 자: 메인으로  이동
})



module.exports = router;
