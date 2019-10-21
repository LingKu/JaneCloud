<template>
  <el-form ref="form" label-position="right" class="j-attribute-set" :model="form" size="mini" label-width="80px">
    <el-form-item label="栅格列数">
      <el-input-number v-model="self.attribute.col.body.span" :min="1" :max="24"></el-input-number>
    </el-form-item>
    <el-form-item label="左侧间隔">
      <el-input-number v-model="self.attribute.col.body.offset" :min="0" :max="24"></el-input-number>
    </el-form-item>
    <el-form-item label="右移格数">
      <el-input-number v-model="self.attribute.col.body.push" :min="0" :max="24"></el-input-number>
    </el-form-item>
    <el-form-item label="左移格数">
      <el-input-number v-model="self.attribute.col.body.pull" :min="0" :max="24"></el-input-number>
    </el-form-item>
  </el-form>
</template>
<script type="text/javascript">
import common from '../../common.js'
export default {
  created() {
    this.self = common(this);
    this.form = this.self.attribute.col.body;
  },
  props: {
    value: [Array, Object]
  },
  components: {
    //Logo
  },
  data() {
    return {
      form: {
        span: 24,
        offset: 0,
        push: 0,
        pull: 0
      }
    }
  }
}

</script>
<style type="text/css" lang="scss">
.j-attribute-set {
  padding: 10px;
}

.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  margin-bottom: 10px;
}

.el-form--label-top .el-form-item__label {
  float: none;
  display: inline-block;
  text-align: left;
  padding: 0;
}

</style>
