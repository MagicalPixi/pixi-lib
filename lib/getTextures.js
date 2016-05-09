var createLoader = require('./createLoader');

/**
 * 设定资源或取出资源
 *
 * @param spriteName
 * @returns {*}
 */
module.exports = function(spriteName){
  var resources = createLoader.getResources();

  var textures = false;

  if (resources[spriteName]) {

    textures = resources[spriteName].texture || resources[spriteName].textures;
  }

  return textures;
};