/**
 * Created by zyg on 16/1/31.
 */

var setConfig = require('./setConfig');

module.exports = function getIm(config) {
  var textures = config.textures;

  delete config.textures;

  var sp = new PIXI.Sprite(textures);

  return setConfig(sp,config);
};