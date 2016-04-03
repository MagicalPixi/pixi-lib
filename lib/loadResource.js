/**
 * 加载对应的资源链接，png或json
 * @param resourceUrl
 * @param cb resourceObject
 */
var count = 0;

module.exports = function loadResource(resourceUrl, cb) {
  var resourceKey = 'img' + Date.now() + '' + (count++);

  PIXI.loader.add(resourceKey, resourceUrl)
    .load(function (loader, resources) {

      cb(resources[resourceKey]);
    });
};