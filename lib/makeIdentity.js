/**
 * 计算单位向量
 * @param [a,b]
 * @returns [c,d]
 */
var distance = require('./distance');

module.exports = function(a) {

  if(a[0] == 0 && a[1] == 0) {
    return [0, 0]
  }
  var b = distance(0,0,a[0],a[1]);
  //Math.pow((Math.pow(a[0], 2) + Math.pow(a[1], 2)), 0.5);
  return [a[0] / b , a[1] / b]
};