/*
 * @Author: qinuoyun
 * @Date:   2019-10-15 17:29:00
 * @Last Modified by:   qinuoyun
 * @Last Modified time: 2019-10-15 18:39:19
 */
import Vue from 'vue'


var Base = {
  data() {
    return {
      nihao: 1,
      demo: 2,
      test: "测试"
    }
  },
  /**
   * 计算属性
   * @type {Object}
   */
  computed: {

  },
  /**
   * 数据监听
   * @type {Object}
   */
  watch: {

  },
  /**
   * 页面加载执行
   * @return {[type]} [description]
   */
  mounted() {

  },
  /**
   * 页面方法
   * @type {Object}
   */
  methods: {
    xiugai() {
      this.test = "你好呀"
    }
  }
}
var HH = new Vue(Base);

export default HH;
