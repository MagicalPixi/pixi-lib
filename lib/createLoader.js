/**
 * Created by zyg on 16/2/2.
 */
var PIXI = require('pixi');

var getTextures = require('./getTextures');

var range = require('lodash/fp/range');
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
        postFix = 'json'
      }

      spriteNames = [].concat(spriteNames).map(function (spriteNameOne) {

        return {
          key: spriteNameOne,
          value: config.publicPath + spriteNameOne + '/' + spriteNameOne + '.' + postFix
        }
      });

      mySpriteNames = mySpriteNames.concat(spriteNames);

      return this;
    },
    addMulti : function(spriteName,nameFormats,postFix){
      if (!postFix) {
        postFix = 'json'
      }


      if(typeof nameFormats === 'number'){
        nameFormats = range(nameFormats);
      }

      mySpriteNames = mySpriteNames.concat(nameFormats.map(function (i) {

        var spriteNameOne = spriteName + i;

        return {
          key:spriteNameOne,
          value: config.publicPath + spriteName + '/' + spriteNameOne + '.' + postFix
        }
      }));

      return this;
    }
  }
};