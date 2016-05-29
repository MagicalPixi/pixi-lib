/**
 * 计算两点间距
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns {number}
 */
module.exports = function(x1, y1, x2, y2) {
  console.log('deprecated:use .math.distance')
  return Math.pow((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)), 0.5);
}