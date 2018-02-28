/*
 * @Author: ylq 
 * @Date: 2018-02-28 17:05:38 
 * @Desc: 路由表 
 * @Last Modified by: ylq
 * @Last Modified time: 2018-02-28 17:33:21
 */
import Hello from '@/components/HelloWorld'
const he = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'he')
const login = r => require.ensure([], () => r(require('@/views/login')), 'login')
const index = r => require.ensure([], () => r(require('@/views/index')), 'index')


const constantRouterMap = [
    {
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
        //redirect: '/index',
        meta: {
            roleId: 10,
            pageTitle: '首页',
            auth: true, // 添加该字段，表示进入这个路由是需要登录的
            drop: false // 是否有下拉菜单
        },
        // children: [
        //     {
        //         path: '/index',
        //         component: index,
        //         meta: { auth: true, roleId: 10, pageTitle: '首页' }
        //     }
        // ]
    }
]
export default constantRouterMap


