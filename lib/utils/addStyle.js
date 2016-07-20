/**
 * Created by zyg on 16/7/20.
 */
module.exports = function addStyle(ele, styleObj) {
  Object.keys(styleObj).map(function(key){
    ele.style[key] = styleObj[key]
  })
}