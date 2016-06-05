/**
 * Created by zyg on 16/6/5.
 */

module.exports = function (mp3Url) {
  var body = document.querySelector('body')

  var audioEle = document.createElement('audio')

  audioEle.src = mp3Url

  return {
    play: function () {
      audioEle.play()
    },
    stop: function () {
      audioEle.stop()
    },
    remove: function () {
      audioEle.stop()
      audioEle.remove();
    }
  }
}