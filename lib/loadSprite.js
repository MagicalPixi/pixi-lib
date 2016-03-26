/**
 * Created by zyg on 16/3/25.
 */
var PIXI = require('pixi');
var loadResource = require('./loadResource');
var getMc = require('./getMc');
var getIm = require('./getIm');

var spriteFnMap = {};

spriteFnMap.im = getIm;
spriteFnMap.mc = getMc;
/**
 * 加载资源，生成精灵
 *
 * @param resourceUrl  资源
 * @param spriteType  类型
 * @param properties 属性
 * @param cb
 */
module.exports = function (resourceUrl,spriteType,properties,cb) {

  loadResource(resourceUrl, function (resource) {
    //同时兼容到im和mc
    properties.textures = resource.texture || resource.textures;

    var spriteDisplayObj = spriteFnMap[spriteType](properties);

    cb(spriteDisplayObj);
  });
};