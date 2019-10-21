<template>
  <div id="j-main">
    <div class="j-left">
      <el-scrollbar class="j-content" :view-style="`height:${height};width: 100%`" :native="false">
        <div>数据显示：</div>
        <div class="j-adsorb-box">

          <div class="j-ide">
            <div class="j-ide-if">
              <!-- 条件 -->
              <div class="__if">IF:</div>
              <div class="__if_body">BODY:</div>
              <div class="__elseif">ELSEIF:</div>
              <div class="__elseif_body">:ELSEIFBODY</div>
              <div class="__else">ELSE:</div>
              <div class="__else_body">ELSEBODY:</div>
            </div>
            <jIf />
          </div>
        </div>
      </el-scrollbar>
    </div>
    <el-scrollbar class="j-right" :view-style="`height:${height}`" :native="false">
      <el-collapse :value="['1','2','3','4','5']">
        <el-collapse-item title="模型库" name="1">
        </el-collapse-item>
        <el-collapse-item title="数据库" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="执行库" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="条件库" name="4">
          <ul class="j-model-list">
            <li class="j-model-itme" style="border:1px solid green;" draggable="true" @dragstart="dragstart($event, item.data)" @dragend="dragend" v-for="(item,index) in term" :key="index">
              IF
            </li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="模型管理器" name="5">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </el-scrollbar>
  </div>
</template>
<script>
import jIf from '~/components/editor/jIf.vue'
export default {
  name: "Cloud",
  components: {
    jIf
  },
  data() {
    return {
      height: 0,
      term: [{
        title: "IF",
        name: "IF",
        data: {
          id: 128
        }
      }],
      dropData: []
    }
  },
  created() {
    this.getHeight()
  },
  methods: {
    getHeight() {
      if (process.browser) {
        this.height = window.innerHeight - 95 + 'px';
      }
    },
    dragstart(event, data) {
      console.log('drag')
      event.dataTransfer.setData('item', data)
    },
    dragend(event) {
      event.dataTransfer.clearData()
    },
    drop(event) {
      console.log('drop')
      let data = event.dataTransfer.getData('item')
      this.dropData = data
      console.log('data: ', data)
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

    .j-adsorb-box {
      width: 700px;
      min-height: 900px;
      background-color: red;
    }

    .j-ide {
      margin: 50px auto;
      width: 80%;

      box-sizing: border-box;
      /* Firefox */
      -moz-box-sizing: border-box;
      /* Safari */
      -webkit-box-sizing: border-box;

      .j-ide-if {
        width: 320px;
        height: 500px;
        border: 1px solid red;

        .__if,
        .__elseif,
        .__else {
          width: 150px;
          height: 35px;
          border: 1px solid rgb(15, 44, 175);

        }

        .__if_body,
        .__elseif_body,
        .__else_body {
          width: 200px;
          height: 100px;
          border: 1px solid rgb(15, 44, 175);
          margin-left: 20px;
        }
      }
    }
  }

  .j-right {
    width: 320px;

    .j-model-list {
      list-style-type: none;
    }

    .j-model-itme {
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
