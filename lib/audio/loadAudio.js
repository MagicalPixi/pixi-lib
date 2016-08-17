/**
 * Created by zyg on 16/8/17.
 */

var _ = require('lodash');


function AudioPlayer(src) {
  this.el = document.createElement('audio');
  this.el.src = src;
  this.playing = false;

  var self = this;

  this.el.addEventListener('pause',function () {
    self.playing = false;
  });
  this.el.addEventListener('ended',function () {
    self.playing = false;
  })
  
}
AudioPlayer.prototype.play = function (beginHead) {
  if(beginHead){
    this.el.currentTime=0;
  }
  this.el.play();
  this.playing = true;
};
AudioPlayer.prototype.stop = function () {
  this.el.stop();
  this.playing = false;
};
/**
 * 音频加载和播放相关的库
 * @param Object config {
 *    key:<url>
 * }
 */
module.exports = function (config) {

  var cache = [];

  var playObj = Object.keys(config).map(function(key){

    var playObj = {};
    playObj[key] = function () {

      var  idleAp = cache.filter(function (ap) {
        return !ap.playing;
      })[0];

      if(!idleAp){
        idleAp = new AudioPlayer(config[key]);
        cache.push(idleAp);
      }

      idleAp.play(true);

      return idleAp;
    };
    return playObj;
  }).reduce(function (i,next) {
    return _.assign(i,next);
  },{});


  return playObj;
};