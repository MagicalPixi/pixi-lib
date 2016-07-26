/**
 * Created by zyg on 16/7/25.
 */
var repeat = require('./repeat')

module.exports = function resizeImageData(data,width,resize){
  resize = parseInt(resize)
  width = parseInt(width)
  if(!isNaN(resize) && !isNaN(width)){

    var lines = parseInt(data.length / width)
    var i=0;

    var finalResizedData = [];

    while(i<=lines){
      var lineOne = data.slice(i * width,(i+1)*width);
      i++

      lineOne = lineOne.reduce(function (init,dataOne) {
        return init.concat(repeat(dataOne,resize))
      },[])

      var resizedLineOne = repeat(lineOne,resize).reduce(function (p, n) {
        return p.concat(n)
      },[])

      finalResizedData = finalResizedData.concat(resizedLineOne)
    }

    return finalResizedData
  }else{
    return false;
  }
}