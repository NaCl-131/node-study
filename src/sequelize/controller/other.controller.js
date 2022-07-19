// import {
//     tokenVerify

const {
    tokenVerify
} = require("../service/user.service")

// } from '../service/user.service'
class otherController {
    //删除用户
    async userDelete(ctx) {
        const userInfo = await tokenVerify(ctx.request.header.token)
        // console.log('%c [ userInfo ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', userInfo)
        if (userInfo.is_admin) {
            ctx.body = {
                code: 0,
                message: '删除成功',
                result: {
                    // id: res.id,
                    // user_name: res.user_name,
                },
            }
        } else {
            ctx.body = {
                code: 0,
                message: '没有管理员权限!',
                result: {
                    // id: res.id,
                    // user_name: res.user_name,
                },
            }
        }
        // console.log('%c [  ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', ctx.request.header)

    }
}
module.exports = new otherController()