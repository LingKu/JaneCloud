<template>
  <div style="border:1px solid red;height: 100px;width:300px; background-color: #fff" @drop="self.drop" @dragover.prevent>
    <p style="color:#ccc;">{{self.dropData}} </p>
  </div>
</template>
<script type="text/javascript">
import common from '~/components/common.js'
export default {
  created() {
    this.self = common(this)
  }
}
</script>
<style type="text/css" lang="scss">
</style>
