/*
 * @Author: ylq 
 * @Date: 2018-02-28 17:04:19 
 * @Desc: 路由
 * @Last Modified by: ylq
 * @Last Modified time: 2018-02-28 17:11:16
 */
import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'

Vue.use(Router)

// 使用配置文件规则  
const router = new Router({
	mode: 'history',
	linkActiveClass: 'xz-nav-selected',
	base: __dirname,
	scrollBehavior: () => ({ y: 0 }),
	routes: routers
})

// 导出
export default router