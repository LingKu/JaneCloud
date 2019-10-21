<template>
  <section class="j-layout">
    <div class="j-space">
      <el-card class="j-box-card" shadow="never" style="height: 30%;">
        <div slot="header" class="clearfix">
          <span>资源管理器</span>
          <div style="float: right;">
            <newResources />
          </div>
        </div>
        <el-scrollbar class="j-space-body" :native="false" :noresize="true" style="height: 100%;">
          <el-tree :data="resources" :props="defaultProps"></el-tree>
        </el-scrollbar>
      </el-card>
      <el-tabs class="j-box-card" type="border-card" style="height: 70%;">
        <el-tab-pane label="基础控件">
          <control index="0" />
        </el-tab-pane>
        <el-tab-pane label="表单组件">
          <control index="1" />
        </el-tab-pane>
        <el-tab-pane label="特殊组件">
          <control index="2" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <article class="j-canvas">
      <div class="j-canvas-body">
        <div>
          <div :style="`width: ${config.width}; height: ${config.height}; margin:100px auto;`">
            <div :style="`width:100%; background-color: red; height: ${item.attribute.height};`" v-for="(item,index) in config.layer" :key="index">
              <el-row :gutter="item.attribute.gutter" :justify="item.attribute.justify" :align="item.attribute.align" :type="item.attribute.type" v-if="item.attribute.col.length">
                <el-col :span="i.span" :offset="i.offset" :push="i.push" :pull="i.pull" v-for="(i,k) in item.attribute.col" :key="k">
                  <div class="grid-content" @click="onAttr($event, [index,k])" data-type="col" :data-index="k" @drop="drop" @dragover.prevent>
                    数据链{{i}}
                  </div>
                </el-col>
              </el-row>
            </div>
            <!--             <div style="width:100%;background-color: green; height: 340px;" data-index="22" @drop="drop" @dragover.prevent>
                          <component :is="flag1"></component>
              <component :is="flag2"></component>
            </div>
            <div style="width:100%;background-color: yellow; height: 80px;" data-index="33" @drop="drop" @dragover.prevent>尾部</div> -->
          </div>
        </div>
      </div>
      <scale></scale>
    </article>
    <div class="j-attribute">
      <el-tabs class="j-box-card" type="border-card" style="height: 25%;">
        <el-tab-pane label="数据模型">
          <!--   <component :is="flag1"></component> -->
        </el-tab-pane>
        <el-tab-pane label="操作执行">
          <!--  <component :is="flag1"></component> -->
        </el-tab-pane>
      </el-tabs>
      <el-tabs class="j-box-card" type="border-card" style="height: 30%;">
        <el-tab-pane :label="item.title" v-for="(item,index) in attribute" :key="index">
          <el-scrollbar class="j-space-body" :native="false" :noresize="true" style="height: 100%;">
            <component :is="flag1[item.components]" v-model="item.data"></component>
          </el-scrollbar>
        </el-tab-pane>
        <!--         <el-tab-pane label="内容属性">
          <el-scrollbar class="j-space-body" :native="false" :noresize="true" style="height: 100%;">
            <component :is="flag1"></component>
          </el-scrollbar>
        </el-tab-pane> -->
      </el-tabs>
      <el-card class="j-box-card" shadow="never" style="height: 45%;">
        <div slot="header" class="clearfix">
          <span>图层管理</span>
          <el-button size="mini" style="float: right;" type="text" @click="newLayer">新建图层</el-button>
        </div>
        <el-scrollbar class="j-space-body" :native="false" :noresize="true" style="height: 100%;">
          <el-menu default-active="0" @select="handleLayer" class="j-block-layer" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item :index="index.toString()" style="padding-left: 10px;" v-for="(item,index) in config.layer" :key="index">
              <i class="el-icon-view"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
            <el-menu-item index="-1" style="padding-left: 10px;">
              <i class="el-icon-view"></i>
              <span slot="title">基层视图</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-card>
    </div>
    </article>
  </section>
</template>
<script type="text/javascript">
import scale from './plugins/scale'
import control from './plugins/control'
import layerAttribute from './control/layer/attribute.vue'
import colAttribute from './control/layer/col.vue'
// import iswitch from './control/form/switch/index.vue'
import newResources from './plugins/new-resources/index.vue'
export default {
  name: "Panel",
  props: {
    value: [Array, Object]
  },
  components: {
    scale,
    newResources,
    control
  },
  data() {
    return {
      config: {
        name: '',
        title: '',
        type: '',
        attribute: "",
        height: "500px",
        width: "800px",
        layer: [{
          title: "图层1",
          name: "layer1",
          attribute: {
            type: "flex", //布局类型
            gutter: 0,
            justify: "start",
            align: "top",
            tag: "div",
            height: "100px", //默认高度
            row: 1, //多少列
            col: [{
              span: 12,
              offset: 0,
              push: 0,
              pull: 0,
              tag: "div"
            }, {
              span: 12,
              offset: 0,
              push: 0,
              pull: 0,
              tag: "div"
            }]
          }
        }]
      },
      attribute: [],
      flag1: {
        "layerAttribute": layerAttribute,
        "colAttribute": colAttribute
      },
      // flag2: iswitch,
      resources: [{
        label: 'components',
        children: [{
          label: '二级 1-1',
        }]
      }, {
        label: 'pages',
        children: [{
            label: '二级 1-1',
          },
          {
            label: '二级 1-1',
          }, {
            label: '二级 1-1',
          }, {
            label: '二级 1-1',
          }
        ]
      }, {
        label: 'models',
        children: [{
            label: '二级 1-1',
          },
          {
            label: '二级 1-1',
          }, {
            label: '二级 1-1',
          }, {
            label: '二级 1-1',
          }
        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
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
    /**
     * 新建资源
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    newResources(data) {
      console.log("新建资源", data);
      this.config = Object.assign(data, this.config);
    },
    /**
     * 新建图层
     * @return {[type]} [description]
     */
    newLayer() {
      let i = this.config.layer.length + 1
      this.config.layer.push({
        title: "图层" + i,
        name: "layer" + i,
        attribute: {
          type: "flex", //布局类型
          gutter: 0,
          justify: "start",
          align: "top",
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
      });
      this.config.layer.reverse();
      //console.log("测试", this.layer);
    },
    /**
     * 操作属性
     * @param  {[type]} data  [description]
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    onAttr(e, index) {
      let type = event.target.dataset.type;
      switch (type) {
        case 'col':
          let data = this.config.layer[index[0]].attribute.col[index[1]];
          console.log("获取数据", [index, data]);
          this.attribute = {
            col: {
              title: "栅格设置",
              components: 'colAttribute',
              body: data
            }
          }
          //this.attribute = attribute;
          break;
        case 'layer':

          break;
      }

    },
    /**
     * 操作图层
     * @param  {[type]} key     [description]
     * @param  {[type]} keyPath [description]
     * @return {[type]}         [description]
     */
    handleLayer(index) {
      if (index == -1) {
        return false;
      }
      let data = this.config.layer[index].attribute;
      console.log("获取数据", data);
      this.attribute = {
        layer: {
          title: "图层设置",
          components: 'layerAttribute',
          body: data
        }
      }
    },
    /**
     * 开始拖动
     * @param  {[type]} event [description]
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    dragstart(event, index) {
      console.log('drag', [event, index])
      //用于发送数据
      event.dataTransfer.setData('items', index)
    },
    /**
     * 拖动初始化
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    dragend(event) {
      event.dataTransfer.clearData()
    },
    /**
     * 用于解决字段缺失问题
     * @param  {[type]} target [description]
     * @param  {[type]} source [description]
     * @return {[type]}        [description]
     */
    extend(target, source) {
      for (var obj in source) {
        if (!target.hasOwnProperty(obj)) {
          target[obj] = source[obj];
        }
      }
      return target;
    },
    /**
     * 拖动目标元素
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    drop(event) {
      //定义data-index 元素数据获取
      console.log("获取目标元素信息", event.target.dataset.index);
      //用于接收数据
      event.dataTransfer.getData('items');
    }
  }
}

</script>
<style type="text/css" lang="scss">
.j-layout {
  display: flex;
  height: 100%;

  .j-space {
    width: 260px;

    .j-space-body {
      height: 200px;
      overflow-x: hidden;
    }
  }

  .j-box-card {

    border-bottom: 0;
  }

  .el-tabs--border-card>.el-tabs__header .el-tabs__item {
    width: 86.5px;
  }

  .j-canvas {
    flex: 1;
  }

  .j-attribute {
    width: 300px;
  }

  .el-card {
    border-radius: 0;
    overflow: hidden;

  }

  .el-card__header {
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #EBEEF5;
    box-sizing: border-box;
    font-size: 12px;
  }

  .el-card__body {
    padding: 0;
    height: calc(100% - 30px);
  }

  .el-tabs__item {
    padding: 0 15px;
    height: 30px;
    box-sizing: border-box;
    line-height: 30px;
    display: inline-block;
    list-style: none;
    font-size: 12px;
    font-weight: 500;
    color: #303133;
    position: relative;
  }

  .el-tabs--border-card {

    box-shadow: none;

  }

  .el-tabs--border-card>.el-tabs__content {
    padding: 0;
  }

  .j-canvas {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .el-tabs__content {
    height: calc(100% - 30px);
  }

  .el-tab-pane {
    height: 100%;
  }

  .grid-content {
    width: 100%;
    min-height: 30px;
  }

  .j-canvas-body {
    position: absolute;
    z-index: 2;
    left: 20px;
    top: 20px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background: #fdfdfd;
    background-image:
      linear-gradient(45deg, #cbcbcb 25%, transparent 0, transparent 75%, #cbcbcb 0),
      linear-gradient(45deg, #cbcbcb 25%, transparent 0, transparent 75%, #cbcbcb 0);
    background-position: 0 0, 5px 5px;
    background-size: 10px 10px;
  }

  .j-block-layer {
    .el-menu-item {

      padding: 0 10px;

    }

    .el-menu-item,
    .el-submenu__title {
      height: 35px;
      line-height: 35px;
    }
  }


}

</style>
