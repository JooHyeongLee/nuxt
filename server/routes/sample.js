const { Request, Response, NextFunction, Router } = require('express');
// router 인스턴스 생성
const router = Router()

router.get('/', async(req, res, next)=>{
    console.log('index route')
    req.session.sample = {
        id: 'sample',
        password: 'sample'
    }
    next()
})

router.get('/sample', async(req, res, next)=>{
    console.log('sample route')
    next()
})

module.exports = router