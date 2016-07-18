/**
 * Created by zyg on 16/5/24.
 */
module.exports = {

  rotateWithCentral: function (x,y,radians) {

    var targetX = x*Math.cos(radians) - y*Math.sin(radians);
    var targetY = x*Math.sin(radians) + y*Math.cos(radians);

    return [
      targetX - x,
      targetY - y,
    ]
  },
  distance: function (x1, y1, x2, y2) {
    return Math.pow((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)), 0.5);
  },
  makeIdentity : function (a) {
    if(!a || a[0] === 0 && a[1] === 0) {
      return [0, 0]
    }
    var b = this.distance(0,0,a[0],a[1]);
    //Math.pow((Math.pow(a[0], 2) + Math.pow(a[1], 2)), 0.5);
    return [a[0] / b , a[1] / b]
  },
  //从0开始
  boomerangTrace:function(x,maxValue,reverse){
    var doubleV = maxValue * 2

    if(!reverse){
      reverse = 1
    }
    
    x = x%doubleV
    
    if(x > maxValue){
      x = doubleV - x
    }
    
    return x * reverse
  }
}