// <project root>/api/index.js
import express from 'express';

// express 인스턴스 생성
const app = express()

// 실제로는 /api 라우트를 처리하는 메소드가 된다.
app.get('/test', function(req, res) {
  res.send('test')
})

// 모듈로 사용할 수 있도록 export
// 앱의 /api/* 라우트로 접근하는 모든 요청은 모두 app 인스턴스에게 전달된다.
export const handler = app;