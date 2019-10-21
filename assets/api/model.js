/*
* @Author: qinuoyun
* @Date:   2019-10-17 11:17:27
* @Last Modified by:   qinuoyun
* @Last Modified time: 2019-10-17 11:45:13
*/
import request from '@/assets/util/request'
import url from '@/assets/util/url'


/**
 * 获取所有配置模块
 * @return {[type]} [description]
 */
export function get_config_all() {
  return request({
    url: url('/api/build/config_all'),
    method: 'GET'
  })
}



/**
 * 获取单个配置
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export function get_config_one(data) {
  return request({
    url: url('/api/build/config_one'),
    method: 'POST',
    data: data
  })
}


/**
 * 设置创建模块
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export function set_create_model(data) {
  return request({
    url: url('/api/build/create'),
    method: 'POST',
    data: data
  })
}
