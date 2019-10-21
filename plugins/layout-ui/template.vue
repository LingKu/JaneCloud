<template>
  <el-container class="layout-ui">
    <el-header>
      <slot name="header"></slot>
    </el-header>
    <el-main :style="`height:${height}`">
      <slot></slot>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      height: ""
    }
  },
  components: {},
  created() {
    this.getHeight();
  },
  watch: {
    height: function(newVal) {
      this.global.height = newVal;
    }
  },
  /**
   * 页面加载执行
   * @return {[type]} [description]
   */
  mounted() {
    if (process.browser) {
      window.onresize = () => {
        this.global.height = this.height = window.innerHeight - 60 + "px";
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getHeight() {
      if (process.browser) {
        this.height = window.innerHeight - 60 + 'px';
      }
    },
    tiaozhuan() {
      return this;
    }
  }
}

</script>
<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* Firefox */
  -moz-box-sizing: border-box;
  /* Safari */
  -webkit-box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  /* Firefox */
  -moz-box-sizing: border-box;
  /* Safari */
  -webkit-box-sizing: border-box;
  margin: 0;
}

html,
body,
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}



.el-main {
  overflow: hidden;
  padding: 0;
}

.el-header {
  padding: 0;
}

.layout-ui {
  height: 100%;
}

</style>
