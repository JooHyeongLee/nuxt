const { Request, Response, NextFunction, Router } = require('express');
// router 인스턴스 생성
const router = Router()

router.post('/api/auth/login', async(req, res, next)=>{
  console.log('/api/auth/login')
  console.log(req.body)
  next()
})

router.post('/api/auth/logout', async(req, res, next)=>{

})

module.exports = router