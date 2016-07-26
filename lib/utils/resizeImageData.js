/**
 * Created by zyg on 16/7/25.
 */
var repeat = require('./repeat')

/**
 *
 * 放大canvas的ImageData
 *
 * @param data ImageData.data数组
 * @param width 原canvas宽度
 * @param resizeX 横坐标放大倍数
 * @param resizeY 纵坐标放大倍数,默认为resizeX
 * @param gap 默认为4, ImageData中默认 rgba4位 为一个颜色单元
 * @returns {*}
 */



module.exports = function resizeImageData(data,width,resizeX,resizeY,gap){
  resizeX = parseInt(resizeX)
  resizeY = resizeY ? parseInt(resizeY) : resizeX
  width = parseInt(width)
  gap = gap ? gap : 4

  if(!isNaN(resizeX) && !isNaN(resizeY) && !isNaN(width)){

    var lines = parseInt(data.length / width)
    var i=0;

    var finalResizedData = [];

    while(i<=lines){
      var lineOne = data.slice(i * width,(i+1)*width);
      i++

      //递归
      if(gap === 1){
        lineOne = lineOne.reduce(function (init,dataOne) {
          return init.concat(repeat(dataOne,resizeX))
        },[])
      }else{
        lineOne = resizeImageData(lineOne,gap,1,resizeX,1)
      }


      var resizedLineOne = repeat(lineOne,resizeY).reduce(function (p, n) {
        return p.concat(n)
      },[])

      finalResizedData = finalResizedData.concat(resizedLineOne)
    }

    return finalResizedData
  }else{
    return false;
  }
}