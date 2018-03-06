/*
 * @Author: ylq 
 * @Date: 2018-02-28 17:04:19 
 * @Desc: 路由
 * @Last Modified by: ylq
 * @Last Modified time: 2018-03-06 15:47:27
 */
import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
import storage from '@/utils/storage'
import { BASE, STORAGE_KEY, MAX_LOGIN_AGE } from '@/utils/const'

Vue.use(Router)

// 不重定向白名单
const whiteList = ['/login', '/404']

// 使用配置文件规则
const router = new Router({
  mode: 'history',
  linkActiveClass: 'xz-nav-selected',
  base: __dirname,
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})
// 设置标题
let setDocumentTitle = function (title) {
  document.title = title
}

// 路由开始前
router.beforeEach((to, from, next) => {
  // 设置页面标题
  typeof to.meta.pageTitle !== 'undefined' && setDocumentTitle(to.meta.pageTitle + '--' + BASE.SITENAME)
  // TOKEN
  let token = storage.getItem(STORAGE_KEY.TOKEN)
  if (token) {
  // 有token -- Start
    // 判断用户Token 是否过期
    let lastLoginTime = storage.getItem(STORAGE_KEY.LAST_LOGIN_TIME) || 0
    let isPass = (Date.now() - lastLoginTime) > MAX_LOGIN_AGE
    if (isPass) {
      // 清除 最后登录时间
      storage.removeItem(STORAGE_KEY.LAST_LOGIN_TIME)
      // 清除 TOKEN
      storage.removeItem(STORAGE_KEY.TOKEN)
      return next({
        name: 'login',
        query: {
          // 将当前路径传参
          back: to.fullPath
        }
      })
    } else {
      // token 未过期
      return next()
    }
  // 有token -- End
  } else {
  // 无token -- Start
    if (whiteList.indexOf(to.path) !== -1) { // 无需拦截该路由
      return next()
    } else {
      return next({
        name: 'login',
        query: {
          // 将当前路径传参
          back: to.fullPath
        }
      })
    }
  // 无token -- End
  }
})

// 路由跳转后
router.afterEach(route => {
  Vue.loading.end()
})

// 导出
export default router
