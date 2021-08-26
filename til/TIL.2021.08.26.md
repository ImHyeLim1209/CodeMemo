# Path
- 경로는 상대 경로와 절대 경로가 있다.
- ../ 으로 상위로 올라갈 수 있고, ./은 현재 경로를 의미한다.

## path
```javascript
import path from 'path';  
const __dirname = path.resolve();
```
- nodejs 현재 `실행 위치`가 어디인지 알려주는 path 모듈을 제공하고 있다.

## 상위 경로 이동
```javascript
path = '/upload/target.zip/../word/document.xml';
clearPath = path.resolve(path); // /upload/word/document.xml
```
- 위와 같이 파일에서 ../ 을 이용하여 상위 폴더로 올라갈 수 있다.
- 파일에서 ../를 이용하여 이동한 경로를 해석하지 못할 경우 path.resolve()를 이용하여 해석된 경로를 얻을 수 있다.

# 미들웨어
```javascript
// 미들웨어 기본 형태
const middleware = (req, res, next) => { }

// multer 미들웨어 에러핸들링
const upload = uploader.single('file');
router.post(
  '/upload',
  function (req, res, next) {
    upload(req, res, function (error) {
      return error ? res.json({ isSuccess: false }) : next();
    });
  },
  uploadController,
);
```
- 미들웨어는 기본적으로 위 코드와 같은 형태를 갖는다. 
- 미들웨어의 에러 처리는 미들웨어를 미들웨어 기본 형태의 함수로 감싼 미들웨어를 새롭게 만들어서 작성한다.
- 미들웨어 처리의 결과가 req의 속성으로 붙어 나올 수도 있다.

## multer
```javascript
export default multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      const path = Date.now();

      fileHandler.makeDir(`${UPLOAD_PATH}/${path}`);
      cb(null, `uploads/${path}`);
    },
    filename(req, file, cb) {
      cb(null, filename);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    file.mimetype === filetype ? cb(null, true) : cb(null, false);
  },
});

```
- fileFilter: 파일에 대한 필터링을 걸 수 있다.
  - cb(null, true) 라면 next() 로 넘기는 것, cb(null, false) 라면 넘기지 않는 것이다. -> req.file = undefined가 된다.
  - throw error  할 수도 있다.
- multer 미들웨어를 거치고 나면 req.file에 해당 속성들이 생겨있다.
- 조사해야할 것: multer를 왜 쓸까?
  - 과제에서는 중심이 변환 모듈이므로 쉽고, 빠르게 개발할 수 있는 라이브러리를 중점으로 찾았기 때문에 내가 써본 적 있는 multer를 사용했다는 의미가 있음
  - 과거에 왜 내가 multer를 사용했었는지도 생각하는 것이 좋을 듯


### 기억할 점
- 가장 말단에 있는 leaf 모듈일수록 독립적이고, 상위에 있을 수록 종속성이 많아진다(?).
- 종속성을 없애는 간단한 방법은 parameter로 넘기는 것이다.

### 생각할 것
- 클래스와 객체 리터럴(싱글턴)은 어떨 때 사용하는 것이 좋을까?
  - 클래스
    - 클래스는 속성과 메소드가 존재하기 때문에, 속성과 메소드가 서로 상호작용하는 일이 있다면 클래스를 사용한다.
    - 속성만 있거나 메소드만 있다면 클래스일 필요가 없다.
    - Eslint 설정 중엔 클래스의 메소드는 항상 this를 사용해야하는 규칙이 있다.

