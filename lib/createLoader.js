/**
 * Created by zyg on 16/2/2.
 */
var PIXI = require('pixi');

var getTextures = require('./getTextures');

/**
 *
 * @param config
 *
 * publicPath:'资源加载路径',以/结尾
 *
 * @returns {{load: Function}}
 */
module.exports = function (config) {

  var mySpriteNames = [];

  return {

    load: function (cb) {

      mySpriteNames.forEach(function (spriteResourceOne) {
        PIXI.loader.add(
          spriteResourceOne.key,
          spriteResourceOne.value
        );
      });

      if(mySpriteNames.length > 0){

        mySpriteNames = [];

        PIXI.loader.load(function (loader,loadedResources) {

          getTextures(loadedResources);

          cb(loader,loadedResources);
        });
      }

      return this;
    },
    add: function (spriteNames,postFix) {
      if (!postFix) {
        postFix = 'png'
      }

      spriteNames = [].concat(spriteNames).map(function (spriteNameOne) {

        return {
          key: spriteNameOne,
          value: config.publicPath + spriteNameOne + '/' + spriteNameOne + '.' + postFix
        }
      });

      mySpriteNames = mySpriteNames.concat(spriteNames);

      return this;
    }
  }
};