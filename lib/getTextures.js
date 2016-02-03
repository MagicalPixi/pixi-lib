/**
 * Created by zyg on 16/2/3.
 */
var assign = require('lodash/fp/assign');
var resources = {};

/**
 * 设定资源或取出资源
 *
 * @param spriteName
 * @returns {*}
 */
module.exports = function(spriteName){
  if(typeof spriteName === 'object'){
    resources = assign(resources,spriteName);

    return false;
  }else{

    var textures = false;

    if(resources[spriteName]){

      textures = resources[spriteName].texture || resources[spriteName].textures;
    }

    return textures;
  }
};