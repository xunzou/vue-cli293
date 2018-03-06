/*
 * @Author: xunzou
 * @Date: 2018-03-06 22:21:56
 * @Desc: login API
 * @Last Modified by: xunzou
 * @Last Modified time: 2018-03-06 22:39:06
 */
import axios from '@/utils/axios'

export const login = () => {
  return axios({
    method: 'post'
  })
}
