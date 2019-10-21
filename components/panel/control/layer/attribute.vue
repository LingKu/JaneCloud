<template>
  <el-form ref="form" label-position="right" class="j-attribute-set" :model="form" size="mini" label-width="80px">
    <el-form-item label="布局类型">
      <el-select v-model="self.attribute.layer.body.type" placeholder="请选择活动区域">
        <el-option label="flex" value="flex"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="栅格间隔">
      <el-input-number v-model="self.attribute.layer.body.gutter" :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="水平排列">
      <el-select v-model="self.attribute.layer.body.region" placeholder="请选择活动区域">
        <el-option label="start" value="start"></el-option>
        <el-option label="end" value="end"></el-option>
        <el-option label="center" value="center"></el-option>
        <el-option label="space-around" value="space-around"></el-option>
        <el-option label="space-between" value="space-between"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="布局排列">
      <el-select v-model="self.attribute.layer.body.align" placeholder="请选择活动区域">
        <el-option label="top" value="top"></el-option>
        <el-option label="middle" value="middle"></el-option>
        <el-option label="bottom" value="bottom"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="设置高度">
      <el-input-number v-model="self.attribute.layer.body.height" :min="1" :max="1200"></el-input-number>
    </el-form-item>
    <el-form-item label="设置格子">
      <el-input-number v-model="self.attribute.layer.body.row" :min="1" :max="24"></el-input-number>
    </el-form-item>
  </el-form>
</template>
<script type="text/javascript">
import common from '../../common.js'
export default {
  created() {
    this.self = common(this);
    console.log("数据查看",this.self.attribute.layer.body);
  },
  data() {
    return {
      form: {
        type: "flex", //布局类型
        gutter: "", //栅格间隔
        justify: "", // 水平排列方式 start/end/center/space-around/space-between
        align: "", //flex 布局下的垂直排列方式  top/middle/bottom
        tag: "div",
        height: "100px", //默认高度
        row: 1, //多少列
        col: [{
          span: 24,
          offset: 0,
          push: 0,
          pull: 0,
          tag: "div"
        }]
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
