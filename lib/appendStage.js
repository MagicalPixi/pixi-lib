/**
 * 快速生成一个stage，并插入到容器种
 * @param container
 * @param config
 * @returns {module.exports.Container}
 */
var createRender = require('./createRender');

module.exports = function (container,config) {

  var render = createRender.apply(this,arguments);

  var stage = new PIXI.Container();

  var cancelAnimate = render(stage);

  stage.clearRender = cancelAnimate.cancel;

  return stage;
};