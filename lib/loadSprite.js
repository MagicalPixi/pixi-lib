var loadResource = require('./loadResource');
var types = require('./types');
var getMc = require('./getMc');
var getIm = require('./getIm');
var getSp = require('./getSp');

var spriteFnMap = {};

spriteFnMap[types.SPRITE_IM] = getIm;
spriteFnMap[types.SPRITE_MC] = getMc;
spriteFnMap[types.SPRITE_SP] = getSp;
//为了兼容
spriteFnMap['image'] = getIm;
spriteFnMap['movieClip'] = getMc;
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