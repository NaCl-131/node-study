// const { Json } = require('sequelize/types/utils')
const {
  createUser,
  UserExistJudge,
  UserPasswordJudge
} = require('../service/user.service')
class UserController {
  async register(ctx, next) {
    // 1. 获取数据
    // console.log(ctx.request.body)
    const {
      user_name,
      password
    } = JSON.parse(ctx.request.body)

    // 2. 操作数据库
    const isUserExist = await UserExistJudge(user_name)
    if (isUserExist) {
      ctx.body = {
        code: 0,
        message: '用户名已存在',
        result: {},
      }
    } else {
      const res = await createUser(user_name, password);
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name,
        },
      }
    }

  }
  async login(ctx, next) {
    const {
      user_name,
      password
    } = JSON.parse(ctx.request.body)

    const isUserExist = await UserExistJudge(user_name);

    if (isUserExist) {
      //登录成功
      let UserInfo = await UserPasswordJudge(user_name, password);
      if (UserInfo.UserPasswordTrue) {
        ctx.body = {
          code: 0,
          message: '登录成功！',
          result: {
            id: UserInfo.id,
            user_name: UserInfo.user_name,
            token: UserInfo.token
          },
        }
      } else {
        ctx.body = {
          code: 0,
          message: '密码错误！',
          result: {},
        }
      }

    } else {
      ctx.body = {
        code: 0,
        message: '用户名不存在！',
        result: {},
      }
    }

  }
}
module.exports = new UserController()