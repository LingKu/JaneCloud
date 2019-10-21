/*
 * @Author: qinuoyun
 * @Date:   2019-10-15 18:41:12
 * @Last Modified by:   qinuoyun
 * @Last Modified time: 2019-10-16 14:46:32
 */
let _root = false;

function function_name(argument) {
  let _parent = argument.$parent;
  if (_parent._name) {
    if (_parent._name != "<Cloud>") {
      function_name(_parent);
    } else {
      _root = _parent;
    }
  }
  return _root;
}

export default function_name;
