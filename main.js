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
