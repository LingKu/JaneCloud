<template>
  <div id="j-main">
    <div class="j-left">
      <el-scrollbar class="j-content" :view-style="`height:${config.height};width: 100%`" :native="false">
        <ul>
          <li v-for="(item,index) in modelList" :key="index" @click="handleModel(item.name)">
            {{item.title}}
            {{item.name}}
            {{item.fields.length}}
          </li>
        </ul>
      </el-scrollbar>
    </div>
    <el-scrollbar class="j-right" :view-style="`height:${config.height}`" :native="false">
      数据
    </el-scrollbar>
  </div>
</template>
<script>
import { get_config_all, get_config_one, set_create_model } from '@/assets/api/model.js'
export default {
  name: "Jmodel",
  components: {

  },
  data() {
    return {
      config: this.global,
      modelList: []

    }
  },
  created() {

  },
  /**
   * 页面加载执行
   * @return {[type]} [description]
   */
  mounted() {
    this.getModelList();
  },
  methods: {
    getModelList() {
      get_config_all().then(response => {
        this.modelList = response;
        console.log('获取结果', response);
      })
    },
    handleModel(name) {
      this.$router.push({ path: '/create', query: { name: name } })
    }
  }
}

</script>
<style lang="scss">
.list {
  max-height: 100%;
}

#j-main {
  background-color: #fff;
  display: flex;
  padding: 0;
  width: 100%;
  height: 100%;

  .j-content {
    width: 100%;
  }

  .j-left {
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    /* Firefox */
    -moz-box-sizing: border-box;
    /* Safari */
    -webkit-box-sizing: border-box;

    .j-model-vessel {
      width: 80%;
      margin: 20px auto;
      min-height: 500px;
      background-color: red;

      .j-model-list {
        list-style-type: none;
      }

      .j-model-item {
        float: left;
        width: 50px;
        height: 50px;
        display: block;
        border: solid 1px #ccc;
        cursor: pointer
      }
    }
  }

  .j-right {
    width: 320px;

    .el-form {
      padding: 10px 20px 10px 0;
    }

    .el-form-item--mini.el-form-item {
      margin-bottom: 8px;
    }

    .j-model-list {
      list-style-type: none;
    }

    .j-model-item {
      float: left;
      width: 50px;
      height: 50px;
      display: block;
      border: solid 1px #ccc;
      cursor: move;
    }


  }
}

</style>
