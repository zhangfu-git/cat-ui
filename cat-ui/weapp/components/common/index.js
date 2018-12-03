/**
 * @param {any} arguments 
 * 可以是字符串 | 对象 { btn: true } (对象的值是真值者把key, 拿来当class)
 * 
 * @return {string} classname 字符串
 */
export function className() {
  const arr = Array.prototype.slice.call(arguments);
  let classnames = [];
  arr.forEach((item) => {
    if (isString(item)) {
      classnames.push(item)
    } else if (isObject(item)) {
      const arr = _isNeedClassName(item)
      classnames = classnames.concat(arr)
    }
  });
  classnames = classnames.join(' ');
  return classnames;
}

/**
 * 
 * @param {object} obj className 对象key: 为class, value: 真假值
 * @return {array} class集合数组
 */
function _isNeedClassName(obj) {
  const keys = Object.keys(obj);
  const arr = [];
  for (let i = 0, len = keys.length; i < len; i++) {
    if (obj[keys[i]]) {
      arr.push(keys[i])
    }
  }
  return arr;
}

/**
 * 
 * @param {any} val 
 * @return {string} 值的数据类型
 */
export function getType(val) {
  return Object.prototype.toString.call(val);
}

export function isString(val) {
  return getType(val) === '[object String]';
}

export function isObject(val) {
  return getType(val) === '[object Object]';
}

export function isFunction(val) {
  console.log(getType(val), '#################')
  return getType(val) === '[object Function]';
}

export function isNumber(val) {
  let value = parseFloat(val);
  return value === value;
}

export function fomatFloat(val, pos) {
  return Math.round(val * Math.pow(10, pos)) / Math.pow(10, pos);
}

/**
 * 过滤属性
 */
export function filterProp(props, arr) {
  if (!isObject(props)) throw 'props not Object';
  if (!isArray(arr)) throw 'arr not Array';

  let newProps = {};
  arr.forEach((item) => {
    if (!props.hasOwnProperty[item]) {
      newProps[item] = props[item];
    }
  });
  return newProps;
}