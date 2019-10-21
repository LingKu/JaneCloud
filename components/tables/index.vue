<template>
  <div>
    <div>我是最大组件：{{test}}</div>
    <Ta />
    <TB />
  </div>
</template>
<script type="text/javascript">
import Ta from './bin/a.vue'
import TB from './bin/b.vue'

export default {
  name: "Tables",
  props: {
    a1: {
      type: String,
      default: "123"
    },
    a2: {
      type: String,
      default: "新的"
    }
  },
  components: {
    Ta,
    TB
  },
  data() {
    return {
      nihao: 1,
      demo: function() {

      },
      test: "测试"
    }
  },
  created() {

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
    this.test = this.a1;
    // console.log("bin", bin);
    //bin = this;
    //console.log("THH", Base);
    console.log("主要", this);
    //Base.test = "你好"


  },
  /**
   * 页面方法
   * @type {Object}
   */
  methods: {
    bbb2() {
      this.test = this.a2
    },
    bbb1() {
      console.log(1);
    }
  }
}

</script>
<style type="text/css" lang="scss">
</style>
