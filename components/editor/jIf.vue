<template>
  <div class="j-editor">
    <div class="j-if">
      条件
    </div>
    <div class="j-body">
      <jAdsorb />
    </div>
  </div>
</template>
<script type="text/javascript">
import common from '~/components/common.js'
import jAdsorb from './jAdsorb.vue'
export default {
  props: {
    value: [Array, Object]
  },
  components: {
    jAdsorb
  },
  created() {
    this.self = common(this)
  }
}

</script>
<style type="text/css" lang="scss">
</style>
