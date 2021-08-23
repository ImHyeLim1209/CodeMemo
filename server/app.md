# express 요청 파싱
## express.bodyparser()
- bodyparser는 deprecated 되고, 대신 express.urlencoded()와 express.json()을 함께 사용한다.

## express.urlencoded()
- express에 내장된 미들웨어. 
- 수신된 요청을 JSON 형식으로 변환하여 새로운 req.body를 만든다.
- html post form의 요청을 처리하기 위한 body parser
- express.json()과 함께 많이 사용된다.


## express.json()
- express에 내장된 미들웨어.
- 수신된 요청을 JSON 형식으로 변환하여 새로운 req.body를 만든다.
- html post form을 제외한 post 요청을 처리하기위한 body parser
- express.urlencoded()와 함께 사용한다.

레퍼런스: https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
