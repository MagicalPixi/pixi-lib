/**
 * Created by zyg on 16/5/24.
 */
module.exports = {

  rotateWithCentral: function (x,y,radians) {

    var targetX = x*Math.cos(radians) - y*Math.sin(radians);
    var targetY = x*Math.cos(radians) + y*Math.sin(radians);

    return [
      targetX - x,
      targetY - y,
    ]
  }
}