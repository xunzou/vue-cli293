/*
 * @Author: ylq
 * @Date: 2018-02-28 17:05:38
 * @Desc: 路由表
 * @Last Modified by: ylq
 * @Last Modified time: 2018-03-06 15:49:33
 */
const login = r => require.ensure([], () => r(require('@/views/login')), 'login')
const index = r => require.ensure([], () => r(require('@/views/index')), 'index')

const constantRouterMap = [{
  path: '/login',
  name: 'login',
  component: login,
  meta: { hideMenu: true, pageTitle: '用户登录' }
},
{
  path: '/',
  name: 'index',
  icon: 'index',
  component: index,
  meta: {
    pageTitle: '首页',
    auth: true, // 添加该字段，表示进入这个路由是需要登录的
    drop: false // 是否有下拉菜单
  }
}]
export default constantRouterMap
