// 应用前缀名：避免同一个IP:PORT下，LocalStorage Key 同名造成冲突
const prefix = 'XZ_'
export const BASE = {
  SITENAME: 'VUE293-study系统',
  baseURL: '/v1'
}

export const STORAGE_KEY = {
  ACCOUNT: prefix + 'EWORK_NAME', // 账户名 字段名
  PASSWORD: prefix + 'EWORK_PASSOWRD', // 密码 名
  RMP: prefix + 'EWORK_RMP', // 记住密码
  TOKEN: prefix + 'SESSION_KEY', // TOKEN 字段名
  LOGIN_STATUS: prefix + 'LOGIN_STATUS', // 登陆状态
  LAST_LOGIN_TIME: prefix + 'LAST_LOGIN_TIME' // 最近一次登陆成功的时间戳 字段名
}

// 登录的过期时间，默认：2小时
export const MAX_LOGIN_AGE = 7.2 * 1000 * 1000

// 提示信息
export const MSG = {
  SERVICE_FAIL: '后端接口服务异常，请刷新再试~' // 后端服务异常
}
