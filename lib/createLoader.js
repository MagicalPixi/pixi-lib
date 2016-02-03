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


  return {

    load: function (spriteNames,cb) {

      spriteNames.forEach(function (spriteResourceOne) {
        PIXI.loader.add(
          spriteResourceOne.key,
          spriteResourceOne.value
        );
      });

      PIXI.loader.load(function (loader,loadedResources) {

        getTextures(loadedResources);

        cb(loader,loadedResources);
      });
    },
    add: function (spriteName,postFix) {
      if(!postFix){
        postFix = 'png'
      }

      spriteName = [].concat(spriteName).map(function (spriteNameOne) {

        return {
          key:spriteNameOne,
          value:config.publicPath + spriteNameOne + '/' +spriteNameOne + '.' + postFix
        }
      });

      return {
        load: function (cb) {

          this.load(spriteName,cb)

        }.bind(this)
      };
    }
  };
};