/**
 * Created by zyg on 16/2/2.
 */
var PIXI = require('pixi');

var range = require('lodash/fp/range');
var assign = require('lodash/fp/assign');

var loadedResourceCache = {};
/**
 *
 * @param config
 *
 * publicPath:'资源加载路径',以/结尾
 *
 * @returns {{load: Function}}
 */
function createLoader(config) {

  var mySpriteNames = [];

  return {

    load: function load(cb) {

      mySpriteNames.forEach(function (spriteResourceOne) {
        PIXI.loader.add(
          spriteResourceOne.key,
          spriteResourceOne.value
        );
      });

      if(mySpriteNames.length > 0){

        mySpriteNames = [];

        PIXI.loader.load(function (loader,loadedResources) {

          loadedResourceCache = assign(loadedResourceCache,loadedResources);

          cb(loader,loadedResourceCache);
        });
      }else{
        cb(PIXI.loader,loadedResourceCache);
      }

      return this;
    },
    add: function add(spriteNames,postFix) {
      if (!postFix) {
        postFix = 'json'
      }
      spriteNames = [].concat(spriteNames).filter(function (spriteNameOne) {

        return !getTextures(spriteNameOne)

      }).map(function (spriteNameOne) {

        return {
          key: spriteNameOne,
          value: config.publicPath + spriteNameOne + '/' + spriteNameOne + '.' + postFix
        }
      });

      mySpriteNames = mySpriteNames.concat(spriteNames);

      return this;
    },
    addMulti : function addMulti(spriteName,nameFormats,postFix){
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
      }).filter(function (spriteObjOne) {
        return !getTextures(spriteObjOne.key)
      }));

      return this;
    }
  }
}

createLoader.getResources = function getResources() {
  return loadedResourceCache;
};

module.exports = createLoader;