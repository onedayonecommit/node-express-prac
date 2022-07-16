const express = require('express'); // 우리가 설치한 express 모듈을 express 상수에 담겠다
const app = express(); 
app.listen(3000, () => {  // 옆 방법은 3000번 포트로 서버를 열겠다는 의미이며 첫번째 파라미터엔 포트 넘버가 들어간다. 
    // 두번째 파라미터엔 콜백 함수가 들어가며 3000번 포트로 정상적으로 열렸을 때 작동되는 함수이다.
    // 서버가 잘 실행되는지 콘솔창에서 확인을 위해 본인은 console.log('server start') 를 실행하였다.
    // 실행된 콘솔은 터미널에서 확인이 가능하다.
    // 정상적으로 서버가 실행된다면
    // 아래 코드를 console.log('hi my node server') 로 변경시엔 터미널에서 당연히 hi my node server 가 확인될 것 이다.
    console.log('server start')
})

// 우리가 3000번 포트를 열고 해당 웹 서버에 방문하기 위해선 주소창에 localhost:3000 입력 후 접속한다면 우리가 만든 웹서버에 접속 할 수 있다.
// 다만 바로 접속하게 된다면 이상한 문구들이 우리에게 보여줄 것 이다. 그렇기에 아래 코드를 통해 해당 url 에 접속하였을 때 보여줄 문구 또는 파일들을 설정 할 수 있다.

app.get('/', (req, res) => {
    res.send('안녕하세요 제 웹 서버에 방문해주셔서 감사합니다.')
}) 
// 위 코드는 localhost:3000 에 접속 시 화면에 위 문구를 띄어주는 함수이다. 또한 웹페이지 상에선 /가 메인 홈페이지 같은 역할이다.
app.get('/mynode', (req, res) => {
    res.send('welcome to mynode page :)')
})
// 위는 localhost:3000/mynode url 로 접속 시 확인되는 문구가 welcome to mynode page :) 이다.

// 이번엔 문구가 아닌 우리가 만들어둔 html 파일을 화면에 띄워주는 방법을 배워볼 것이다.
app.get('/123', (req, res) => {
    res.sendfile('html/index.html')
})
// html 파일을 띄워주는 것은 문구를 띄워주는 방법과 유사하다.
// 똑같이 경로를 지정해주고 res.send 가 아닌 res.sendfile('html파일이 위치한 경로') 를 작성해주면 해당 html 파일이 지정한 경로에 접속하였을 때 화면에 띄워준다.

// app.get 함수에서 첫번째 파라미터는 경로 두번째는 콜백함수가 실행되는데 해당 콜백함수에서 첫번째 파라미터는 request 라는 의미로 요청 받았을 때 실행되는 의미라고 한다.  두번째 인자는 response 응답이라는 파라미터이며 해당 경로로 접속하였을 때 우리가 문구나 파일들로 응답하는 의미로 생각하면 편할 것 같다. 접속하였을 때 우리는 res.send // res.sendfile 등을 사용하여 문구나 Html로 응답하는 개념이다.