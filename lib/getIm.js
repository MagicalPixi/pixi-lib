/**
 * Created by zyg on 16/1/31.
 */

var setConfig = require('./setConfig');

module.exports = function getIm(config) {
  config = Object.assign({},config);

  var textures = config.textures;

  delete config.textures;

  var sp = new PIXI.Sprite(textures);

  sp.renderCount = 0;

  return setConfig(sp,config);
};