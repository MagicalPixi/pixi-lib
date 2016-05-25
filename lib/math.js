/**
 * Created by zyg on 16/5/24.
 */
module.exports = {

  rotateWithCentral: function (x,y,radians) {

    var targetX = x*Math.cos(radians) - y*Math.sin(radians);
    var targetY = y*Math.cos(radians) + x*Math.sin(radians);

    return [
      targetX - x,
      targetY - y,
    ]
  }
}