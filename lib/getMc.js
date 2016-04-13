/**
 * Created by zyg on 16/1/31.
 */
var setConfig = require('./setConfig');

module.exports = function getMc(config) {

  config = Object.assign({},config);
  
  var textures = config.textures;
  delete config.textures;

  var texturesArr = Object.keys(textures).map(function (key) {
    return textures[key];
  });
  //for(var key in textures){
  //  texturesArr.push(textures[key]);
  //}

  var mc = new PIXI.extras.MovieClip(texturesArr);

  return setConfig(mc,config);
};
