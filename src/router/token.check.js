const {
    tokenVerify
} = require("../sequelize/service/user.service")

async function tokenCheck(ctx, next) {
    let url = ctx.req.url;
    if (url === '/login' || url === '/register') return next();
    const userInfo = await tokenVerify(ctx.request.header.token)
    if (JSON.stringify(userInfo) === '{}') {
        ctx.body = {
            data: 0,
            message: 'token验证失败',
            result: {}
        }
    } else {
        // 挂载
        ctx.state.userInfo = userInfo;
        return next()
    }
}
module.exports = tokenCheck