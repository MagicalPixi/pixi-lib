/**
 * Created by zyg on 16/1/31.
 */
var setConfig = require('./setConfig');

module.exports = function getMc(config) {

  var textures = config.textures;
  delete config.textures;

  var texturesArr = [];
  for(var key in textures){
    texturesArr.push(textures[key]);
  }

  var mc = new PIXI.extras.MovieClip(texturesArr);
//var mc = new PIXI.extras.MovieClip(textures);
  return setConfig(mc,config);

};
