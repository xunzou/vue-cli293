/*
 * @Author: 冰剑
 * @Date: 2018-03-01 14:35:14
 * @Desc: Axios封装
 * @Last Modified by: ylq
 * @Last Modified time: 2018-03-06 15:27:30
 */

import axios from 'axios'
import Vue from 'vue'
import {STORAGE_KEY, BASE} from './const'
import storage from './storage'
import Qs from 'qs'
import router from '@/router'

// formData 格式
let fdHeaders = {
  // formData 格式
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
}
// json格式 payload
let jsonHeaders = {
  'Content-type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

// 创建一个新的axios实例
let http = axios.create({
  baseURL: BASE.baseURL,
  headers: jsonHeaders,
  withCredentials: false,
  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: 'brackets' })
  }
})

// 添加请求拦截器
http.interceptors.request.use(
  config => {
    // 发送数据格式 json  如果需要form/data 增加hdt 属性，值为fd
    if (config.hdt === 'fd') {
      config.headers = fdHeaders
    }
    // 获取token
    let token = storage.getItem(STORAGE_KEY.TOKEN) || null
    if (token) {
      config.headers['Access-Token'] = token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  response => {
    // let rd = response.data
    // let hd = response.headers
    // 存储当前时间
    storage.setItem(STORAGE_KEY.LAST_LOGIN_TIME, Date.now())
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          //  401 清除token信息并跳转到登录页面
          // store.commit(types.LOGOUT);
          storage.removeItem(STORAGE_KEY.TOKEN)
          router.replace({
            path: '/login',
            query: { back: router.currentRoute.fullPath }
          })
          break
        case 403:
          router.replace({
            path: '/home'
          })
          break
      }
    }
    return Promise.reject(error)
  }
)

// 导出 为插件
export default {
  install () {
    Vue.prototype.$http = http
    Vue.http = http
  }
}

// 导出axios
export { http as axios }
