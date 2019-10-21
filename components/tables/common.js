/*
 * @Author: qinuoyun
 * @Date:   2019-10-15 18:41:12
 * @Last Modified by:   qinuoyun
 * @Last Modified time: 2019-10-16 10:48:27
 */
const _root = false;

function function_name(argument) {
  let _parent = argument.$parent;
  if (_parent._name) {
    if (_parent._name != "<Tables>") {
      function_name(_parent);
    } else {
      _root = _parent;
    }
  }
  return _root;
}

export default function_name;
