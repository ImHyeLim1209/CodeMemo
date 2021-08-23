// 1. bodyparser는 deprecated 되었다. 대신...
import express from 'express';

app.use(express.urlencoded( {extended: true} ); // 중첩 객체 허용
app.use(express.json()); // 요청을 json 방식으로 변경
