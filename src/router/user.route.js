const Router = require('koa-router')
const {
    register,
    login
} = require('../sequelize/controller/user.controller')
const {
    userDelete
} = require("../sequelize/controller/other.controller");
const router = new Router();
// const router = new Router({ prefix: '/users' })
// 注册接口
router.post('/register', register)
// 登录接口
router.post('/login', login)
// 删除用户
router.post('/userDelete', userDelete)
module.exports = router