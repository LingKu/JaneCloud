/*
 * @Author: qinuoyun
 * @Date:   2019-10-16 11:18:31
 * @Last Modified by:   qinuoyun
 * @Last Modified time: 2019-10-17 15:31:38
 */
import Vue from 'vue'
import template from './template.vue'


Vue.component('layout-ui', template);


var common = {
  install(Vue) {
    Vue.prototype.global = {
      height: 0
    };
  }
}
Vue.use(common);
