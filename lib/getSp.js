/**
 * Created by zyg on 16/2/29.
 */
var getMc = require('./getMc');

/**
 *
 * @param config
 * @param actions 截止frame帧数
 *  [4,7,10]
 * @returns {*}
 */
module.exports = function getSp(config,actions) {
  if(!actions){
    actions = []
  }

  var obj = getMc(config);

  var _render = obj.render || function () {};
  /**
   * 0~4-0
   * 0-5~7-0
   * 0-8~10-0
   */
  obj.playAction = function playAction(index,loop) {

    if(index < 0 || index > actions.length){
      return false;
    }

    var min = actions[index - 1] || 0;
    var max = actions[index];

    this.gotoAndPlay(min);

    this.render = function copyRender() {
      var cf = this.currentFrame;

      if(cf >= max){

        if(loop){
          this.gotoAndPlay(min);
        }else{
          this.gotoAndStop(0);
          this.render = _render;
        }
      }

      _render.call(this);
    }
  };


  return obj;
};