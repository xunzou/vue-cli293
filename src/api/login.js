/*
 * @Author: xunzou
 * @Date: 2018-03-06 22:21:56
 * @Desc: login API
 * @Last Modified by: xunzou
 * @Last Modified time: 2018-03-08 21:56:12
 */
import axios from '@/utils/axios'
/**
 * 用户认证所用到的 API
 */
class AuthService {
  /**
   * 检测当前用户是否已经登录
   * @resolve {Object} userData / null
   */
  checkLogin () {
    return axios({
      url: '/auth/checkLogin'
    })
  }

  /**
   * 登录
   * @param  {String} userData.username
   * @param  {String} userData.password
   * @return {Object} userData
   */
  login (userData) {
    return axios({
      method: 'post',
      url: '/auth/login',
      body: userData
    })
  }

  /**
   * 注销登录
   * @return {Promise}
   */
  logout () {
    return axios({
      method: 'delete',
      url: '/auth/logout'
    })
  }

}

// 实例化后导出，全局单例
export default new AuthService()
