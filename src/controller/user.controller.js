// const secret = 'JSNJSISFNV'
// const jwt = require('jsonwebtoken');

// class UserController {
//     async register(ctx, next) {
//         ctx.body = '用户注册成功'
//     }
//     async login(ctx, next) {
//         // console.log('%c [ ctx.request.body ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', ctx.request)
//         console.log(ctx.request.body) //获得字符串
//         const data = ctx.request.body;
//         const token = jwt.sign(data, secret);
//         let verifyData = jwt.verify(token, secret);
//         ctx.response.body = [{ //简写：ctx.body
//             "data": {
//                 'meg': "成功",
//                 'token': token,
//                 verifyData
//             }
//         }]
//     }
// }
// module.exports = new UserController()