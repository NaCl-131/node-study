// import {
//     tokenVerify

const {
    userDeleteService
} = require("../service/user.service")

// } from '../service/user.service'
class otherController {
    //删除用户
    async userDelete(ctx) {
        // ctx.request.body
        console.log('%c [ ctx.request.body ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', JSON.parse(ctx.request.body))
        let {
            user_name: userNameForDelete

        } = JSON.parse(ctx.request.body)
        console.log('%c [ userNameForDelete ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', userNameForDelete)
        if (ctx.state.userInfo.is_admin) {
            await userDeleteService(userNameForDelete)
            ctx.body = {
                code: 0,
                message: '删除成功',
                result: {},
            }
        } else {
            ctx.body = {
                code: 0,
                message: '没有管理员权限!',
                result: {},
            }
        }
        // console.log('%c [  ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', ctx.request.header)

    }
}
module.exports = new otherController()