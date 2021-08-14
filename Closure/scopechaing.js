// # 클로저 함수가 스코프체이닝이 되는 예시
// setTimeout의 콜백 함수는 JS 엔진이 비어있는 순간에 JS 엔진에 push되므로(by event loop) 스코프 체이닝이 되지 않는다.
// 그러나 코드에서의 setTimeout의 콜백 함수는 클로저이므로, 현재 선언 환경을 기억하기 때문에 함수가 끝나도 Lexical Environment가 메모리에 살아있기 때문에
// 스코프 체이닝이 가능하다.
function timer () {
  for(let i = 0; i<3; i++){
    setTimeout(function(){
     console.log(i); 
   }, 1000);
  }
}
