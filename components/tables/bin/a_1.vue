<template>
  <div @click="self.bbb2">这是小A-1:{{self.test}}</div>
</template>
<script type="text/javascript">


import common from '../common.js'
export default {
  created() {
    this.self = common(this)
  }
}

</script>
<style type="text/css" lang="scss">
</style>
