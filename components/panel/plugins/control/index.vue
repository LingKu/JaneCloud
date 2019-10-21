<template>
  <el-row class-name="__tool_list">
    <el-col class="__tool_item" :span="8" v-for="tool,index in plugin[index].children" :key="index">
      <div class="__default" draggable="true" @dragstart="self.dragstart($event, index)" @dragend="self.dragend">
        <div class="__icon">
          <i class="el-icon-edit"></i>
        </div>
        <div class="__name">
          {{tool.title}}
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script type="text/javascript">
import common from '../../common.js'
export default {
  created() {
    this.self = common(this);
  },
  props:{
    index:[String,Number]
  },
  data() {
    return {
      plugin: [{
          title: '基础组件',
          children: [{
              'plugin': {

              },
              'title': '标题',
              'icon': 'ios-create-outline'
            }, {
              'plugin': {

              },
              'title': '图片',
              'icon': 'ios-image-outline'
            }]
        },{
          title: '表单组件',
          children: [{
              'plugin': {

              },
              'title': '单选框',
              'icon': 'ios-create-outline'
            }, {
              'plugin': {

              },
              'title': '复选框',
              'icon': 'ios-image-outline'
            },{
              'plugin':{

              },
              'title': '输入框',
              'icon': 'ios-image-outline'
            },{
              'plugin': {

              },
              'title': '计数器',
              'icon': 'ios-create-outline'
            }, {
              'plugin': {

              },
              'title': '下拉框',
              'icon': 'ios-image-outline'
            },{
              'plugin':{

              },
              'title': '级联选择器',
              'icon': 'ios-image-outline'
            },{
              'plugin': {

              },
              'title': 'Switch开关',
              'icon': 'ios-create-outline'
            }, {
              'plugin': {

              },
              'title': '滑块',
              'icon': 'ios-image-outline'
            },{
              'plugin':{

              },
              'title': '时间选择器',
              'icon': 'ios-image-outline'
            },{
              'plugin': {

              },
              'title': '日期选择器',
              'icon': 'ios-create-outline'
            }, {
              'plugin': {

              },
              'title': '上传',
              'icon': 'ios-image-outline'
            }]   
        },{
          title: '特殊组件',
          children: [{
              'plugin': {

              },
              'title': '表格',
              'icon': 'ios-create-outline'
            }, {
              'plugin': {

              },
              'title': '分页',
              'icon': 'ios-image-outline'
            }]  
        }
      ]
    }
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
  /**
   * 页面方法
   * @type {Object}
   */
  methods: {
    addLayer(e) {
      if (e.plugin) {
        console.log('测试', e.plugin);
        // var data = JSON.parse(JSON.stringify(e.plugin));
        // var index = null;
        // if (e.plugin.belong == "container") {
        //   for (var key in this.value.plugin) {
        //     if (this.value.plugin[key].name == "container") {
        //       index = key
        //     }
        //   }
        //   if (index) {
        //     if (!this.value.plugin[index]['plugin']) {
        //       this.value.plugin[index]['plugin'] = [];
        //     }
        //     this.value.plugin[index]['plugin'].push(data);
        //   }
        // } else {
        //   this.value.plugin.push(data);
        // }
        // var plugin = JSON.parse(JSON.stringify(this.value.plugin));
        // this.value.plugin = plugin;
        // this.$emit('select', this.value.plugin.length - 1);
      }
    }
  }
}

</script>
<style type="text/css" lang="scss">
.__tool_list {
  padding: 0;
}

.__tool_item {
  position: relative;
  width: 86px;
  height: 86px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-left: 0;
  border-top: 0;
  text-align: center;
  cursor: move;

  .__icon {
    padding-top: 20px;
    margin-bottom: 5px;

    i {
      font-size: 30px;
      color: #9fcdff;
    }
  }

  .__name {
    font-size: 12px;
    color: #000;
  }
}

.__tool_item:nth-child(3n+0) {
  border-right: 0;
}


.__tool_item:hover {
  background-color: #3fa5ff;

  .__name {

    color: #fff;
  }

  .__icon {
    i.ivu-icon {
      color: #fff;
    }
  }
}

.__tool_item.active {
  background-color: #3fa5ff;

  .__name {

    color: #fff;
  }

  .__icon {
    i.ivu-icon {
      color: #fff;
    }
  }
}

</style>
