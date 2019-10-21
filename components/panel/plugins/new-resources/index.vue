<template>
  <div class="j-new-resources">
    <span @click="dialogVisible = true">新建资源</span>
    <el-dialog title="新建资源" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="j-new-resources-body">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="资源名称">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="资源标识">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="资源类型">
            <el-select v-model="form.type" placeholder="请选择类型">
              <el-option label="组件资源" value="components"></el-option>
              <el-option label="页面资源" value="pages"></el-option>
              <el-option label="数据模型" value="models"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="组件属性">
            <el-select v-model="form.attribute" placeholder="请选择类型">
              <el-option label="普通" value="pages"></el-option>
              <el-option label="模态框" value="components"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAffirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script type="text/javascript">
import common from '../../common.js'
export default {
  created() {
    this.self = common(this);
  },
  data() {
    return {
      form: {
        name: '',
        title: '',
        type: '',
        attribute: ""
      },
      dialogVisible: false
    };
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
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    /**
     * 确认创建
     */
    handleAffirm() {
      this.dialogVisible = false;
      this.self.newResources(JSON.parse(JSON.stringify(this.form)));
      this.form = {
        name: '',
        title: '',
        type: ''
      }
    }
  }
}

</script>
<style type="text/css" lang="scss">
</style>
