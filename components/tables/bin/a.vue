<template>
  <div>
    这是A下面的：{{self.a1}}
    <A1 />
  </div>
</template>
<script type="text/javascript">
import A1 from './a_1.vue'
import common from '../common.js'
export default {
  props: {
    value: [Array, Object]
  },
  components: {
    A1
  },
  created() {
    this.self = common(this)
  }
}

</script>
<style type="text/css" lang="scss">
</style>
