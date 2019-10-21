<template>
  <div id="j-main">
    <div class="j-left">
      <el-scrollbar class="j-content" :view-style="`height:${config.height};width: 100%`" :native="false">
        <div class="j-action" size="mini">
          <el-button-group>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button type="primary">取消</el-button>
          </el-button-group>
        </div>
        <div>数据显示：{{formLabelAlign}}{{config}}</div>
        <div class="j-model-vessel" @drop="drop" @dragover.prevent>
          <ul class="j-model-list">
            <li class="j-model-item" v-for="(item,index) in formLabelAlign.fields" :key="index" @click="onAttr(item,index)">
              {{item.title}}
            </li>
          </ul>
        </div>
      </el-scrollbar>
    </div>
    <el-scrollbar class="j-right" :view-style="`height:${config.height}`" :native="false">
      <el-collapse :value="['1','2','3']">
        <el-collapse-item title="基础信息" name="1">
          <el-form label-position="top" size="mini" label-width="80px" :model="formLabelAlign">
            <el-form-item label="模型名称">
              <el-input v-model="formLabelAlign.title"></el-input>
            </el-form-item>
            <el-form-item label="模型标识">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
          </el-form>
        </el-collapse-item>
        <el-collapse-item title="配置属性" name="2">
          <el-form label-position="left" size="mini" label-width="100px" :model="formLabelField">
            <el-form-item label="字段名称">
              <el-input v-model="formLabelField.title"></el-input>
            </el-form-item>
            <el-form-item label="字段标识">
              <el-input v-model="formLabelField.field"></el-input>
            </el-form-item>
            <el-form-item label="字段类型">
              <el-select v-model="formLabelField.type" placeholder="选择类型">
                <el-option label="字符串" value="String"></el-option>
                <el-option label="数字" value="Number"></el-option>
                <el-option label="日期" value="Date"></el-option>
                <el-option label="二进制" value="Buffer"></el-option>
                <el-option label="布尔值" value="Boolean"></el-option>
                <el-option label="数组" value="Array"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="字段默认值">
              <el-input v-model="formLabelField.default"></el-input>
            </el-form-item>
            <el-form-item label="是否必填">
              <el-radio-group v-model="formLabelField.required">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="设定索引">
              <el-radio-group v-model="formLabelField.index">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="唯一值索引">
              <el-radio-group v-model="formLabelField.unique">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="稀疏索引">
              <el-radio-group v-model="formLabelField.sparse">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="限定长度">
              <el-input v-model="formLabelField.capped"></el-input>
            </el-form-item>
            <el-form-item label="最小长度">
              <el-input v-model="formLabelField.min"></el-input>
            </el-form-item>
            <el-form-item label="最大长度">
              <el-input v-model="formLabelField.max"></el-input>
            </el-form-item>
            <el-form-item label="数据格式化">
              <el-radio-group v-model="formLabelField.format.is_format">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <!-- 判断数据是否格式化 -->
            <template v-if="formLabelField.format.is_format">
              <el-form-item label="格式化规则">
                <el-input v-model="formLabelField.format.value"></el-input>
              </el-form-item>
            </template>
            <el-form-item label="开启验证">
              <el-radio-group v-model="formLabelField.validate.is_validate">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <!-- 判断是否开启验证 -->
            <template v-if="formLabelField.validate.is_validate">
              <el-form-item label="自定义验证">
                <el-radio-group v-model="formLabelField.validate.custom">
                  <el-radio :label="true">是</el-radio>
                  <el-radio :label="false">否</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="验证规则" v-if="!formLabelField.validate.custom">
                <el-select v-model="formLabelField.validate.value" placeholder="验证规则">
                  <el-option label="邮箱验证" value="String"></el-option>
                  <el-option label="手机验证" value="Number"></el-option>
                  <el-option label="是否为空" value="Array"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="自定义规则" v-if="formLabelField.validate.custom">
                <el-input v-model="formLabelField.validate.regular"></el-input>
              </el-form-item>
            </template>
          </el-form>
        </el-collapse-item>
        <el-collapse-item title="模型库建" name="3">
          <ul class="j-model-list">
            <li class="j-model-item" v-for="(item,index) in library" :key="index" draggable="true" @dragstart="dragstart($event, index)" @dragend="dragend">{{item.title}}</li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </el-scrollbar>
  </div>
</template>
<script>
import library from '@/assets/library/model.js'
import { get_config_all, get_config_one, set_create_model } from '@/assets/api/model.js'
export default {
  name: "Jmodel",
  components: {

  },
  data() {
    return {
      config: this.global,
      screenHeight: 100,
      formLabelAlign: {
        name: '',
        title: '',
        fields: []
      },
      formLabelField: {
        title: "字段标题",
        field: "",
        type: "String",
        required: false,
        default: "",
        index: false, //设定索引值nom 
        unique: false, //索引值唯一
        sparse: false, //是否启用稀疏索引
        capped: 0, //限制长度
        min: 0,
        max: 0,
        format: {
          is_format: false, //是否格式化
          value: "" //格式化类型
        },
        validate: {
          is_validate: false,
          custom: false,
          value: "",
          regular: ""
        },
        degree: 1
      },
      action: "insert",
      library: library.data
    }
  },
  created() {

  },
  /**
   * 页面加载执行
   * @return {[type]} [description]
   */
  mounted() {
    if (this.$route.query.name) {
      this.action = "update"
      this.getModelInfo(this.$route.query.name);
    } else {
      this.action = "insert"
    }

  },
  methods: {
    getModelInfo(name) {
      get_config_one({ name: name }).then(response => {
        //处理字段表前缀
        let fields = response.fields;
        for (let i in fields) {
          let item = fields[i];
          fields[i].field = item.field.substr(response.name.length + 1)
        }
        response.fields = fields;
        this.formLabelAlign = response
      })
    },
    onSubmit() {
      let data = {
        action: this.action,
        data: this.formLabelAlign
      };
      console.log(JSON.stringify(data));
      set_create_model(data).then(response => {
        console.log('获取结果', response);
      })
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
    onAttr(data, index) {
      //执行一次数据拷贝，防止字段缺失
      let base = library.copy_data(library.basic);
      this.formLabelField = this.extend(data, base);
    },
    dragstart(event, index) {
      console.log('drag', [event, index])
      event.dataTransfer.setData('items', index)
    },
    dragend(event) {
      event.dataTransfer.clearData()
    },
    drop(event) {
      let index = event.dataTransfer.getData('items')
      let data = JSON.parse(JSON.stringify(this.library[index]));
      if (this.library[index].degree > 0) {
        this.library[index].degree--;
        console.log('drop', [event, data]);
        this.formLabelAlign.fields.push(data);
      } else {
        console.log("无法使用");
      }
      //console.log('data: ', data)
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
