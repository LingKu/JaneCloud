/*
 * @Author: qinuoyun
 * @Date:   2019-10-16 15:53:02
 * @Last Modified by:   qinuoyun
 * @Last Modified time: 2019-10-17 15:59:13
 */
let basic = {
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
}

let library = [{
  title: "标题",
  field: "title",
}, {
  title: "名称",
  field: "name",
}, {
  title: "日期",
  field: "name",
  type: 'Date',
}, {
  title: "时间",
  field: "time",
  type: 'Date',
}, {
  title: "状态",
  field: "name",
}, {
  title: "地址",
  field: "name",
}, {
  title: "手机",
  field: "mobile",
  type: 'Number',
}, {
  title: "邮箱",
  field: "email",
}, {
  title: "数量",
  field: "quantity",
  type: 'Number',
}, {
  title: "价格",
  field: "price",
  type: 'Number',
}, {
  title: "内容",
  field: "body",
}, {
  title: "封面",
  field: "cover",
}, {
  title: "图库",
  field: "album",
}, {
  title: "自定义",
  degree: 99
}, {
  title: "关联器",
  degree: 9
}]

let data = [];

function copy_data(value) {
  return JSON.parse(JSON.stringify(value));
}

for (let i in library) {
  let _base = copy_data(basic);
  let item = copy_data(library[i]);
  data.push(Object.assign(_base, item))
}

export default {
  data,
  basic,
  copy_data
};
