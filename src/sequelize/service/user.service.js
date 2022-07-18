const User = require('../model/user')
class UserService {
  // 插入用户数据
  async createUser(user_name, password) {
      // 插入数据
    const res = await User.create({
      // 表的字段
      user_name: user_name,
      password: password
    })
    console.log(res.dataValues)
    return res.dataValues
  }
  // 判断用户是否存在
  async UserExistJudge(user_name){
    const res=await User.findAll({
      where:{
        user_name
      }
    })
    
    console.log('%c [  ]-22', 'font-size:13px; background:pink; color:#bf2c9f;', res.dataValues)
   if(res.length!==0) return true; //用户名存在
   else return false; //不存在
  }
  // 判断用户密码
  async UserPasswordJudge(user_name,password){
    const user=await User.findAll({
      where:{
        user_name
      }
    })
    console.log("user",user)
    return user["zd_user"].dataValues.password==password?user["zd_user"].dataValues:null
  }
}
module.exports = new UserService()