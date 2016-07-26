/**
 * Created by zyg on 16/7/20.
 */
var _ = require('lodash')

module.exports = function(value,num){

  return _.range(num).map(function(){
    return value
  })
}