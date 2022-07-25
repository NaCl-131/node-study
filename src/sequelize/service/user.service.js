const User = require('../model/user');
const jwt = require('jsonwebtoken');
const session = require('koa-session');

const {
  TOKEN_SECRET
} = require('../../config/config.default')
class UserService {
  // 插入用户数据
  async createUser(user_name, password) {
    const res = await User.create({
      user_name: user_name,
      password: password
    })
    console.log(res)
    return res.dataValues
  }
  // 判断用户是否存在
  async UserExistJudge(user_name) {
    const res = await User.findAll({
      where: {
        user_name: user_name
      }
    })
    if (res.length !== 0) {
      return true;
    } //用户名存在
    else return false; //不存在
  }
  // 判断用户密码
  async UserPasswordJudge(user_name, password) {
    const user = await User.findAll({
      where: {
        user_name
      }
    })
    const token = await getToken({
      user_name,
      password,
      is_admin: user[0].is_admin
    })
    console.log('%c [ token ]-37', 'font-size:13px; background:pink; color:#bf2c9f;', token)
    return {
      UserPasswordTrue: user[0].password === password,
      user_name: user[0].user_name,
      id: user[0].id,
      token: token
    }
  }
  // 使用cookie登录
  async UserPasswordJudgeForCookie(user_name, password) {
    const user = await User.findAll({
      where: {
        user_name
      }
    })

    // const token = await getToken({
    //   user_name,
    //   password,
    //   is_admin: user[0].is_admin
    // })
    // console.log('%c [ token ]-37', 'font-size:13px; background:pink; color:#bf2c9f;', token)
    return {
      UserPasswordTrue: user[0].password === password,
      user_name: user[0].user_name,
      id: user[0].id,
      // token: token
    }
  }
  //验证用户token
  async tokenVerify(token) {
    try {
      return jwt.verify(token, TOKEN_SECRET);
    } catch (error) {
      return {}
    }
  }
  // 删除用户
  async userDeleteService(user_name) {
    await User.destroy({
      where: {
        user_name: user_name
      }
    })
    return true
  }
}
let getToken = async (body) => {

  const token = jwt.sign(body, TOKEN_SECRET);
  // let verifyData = jwt.verify(token, TOKEN_SECRET);
  return token;
}
module.exports = new UserService()