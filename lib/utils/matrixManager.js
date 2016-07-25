/**
 * Created by zyg on 16/7/20.
 */

var addStyle = require('./addStyle')

function blockStyle(bgc) {
  return {
    backgroundColor:bgc ? bgc : '#fff',
    width:'12px',
    height:'12px',
    float:'left',
    transition:'all 0.5',
    webkitTransition:'all 0.5',
  }
}
function blockRotateStyle(bgc) {
  return {
    backgroundColor:bgc ? bgc : '#000',
  }
}

function matrixContainerStyle() {
  return {
    width:'132px',
    height:'132px',
    position:'absolute',
    left:'50%',
    top:'50%',
    overflow:'hidden',
    transform:'translate(-50%,-50%)',
    webkitTransform:'translate(-50%,-50%)',
  }
}


function rotateAnimation(element,color) {

  var from = 0,to = 180;

  var pre = 1 ? 'rotateY' : 'rotateX'

  function task(){

    from += 5

    var styleObj = {
      backgroundColor:color
    }
    styleObj.transform = pre + '('+from+'deg)'

    addStyle(element,styleObj)

    if(from < to){
      requestAnimationFrame(task)
    }
  }

  task()
}

function hasColor(c){
  return ['transparent','#000','#000000'].indexOf(c) === -1
}

module.exports = function(dataArr){
  

  var containerDiv = document.createElement('div')

  addStyle(containerDiv,matrixContainerStyle())

  var elementsArr = dataArr.map(function(c,i){
    var cell = document.createElement('span')

    cell.toBeColor = c;

    if(hasColor(c)){
      c = '#fff'
    }

    addStyle(cell,blockStyle(c))

    containerDiv.appendChild(cell)


    return cell
  }).filter(function(ele){

    return hasColor(ele.toBeColor)
  })




  return {
    el:function(styleObj){
      if(styleObj){
        addStyle(containerDiv,styleObj)
      }
      return containerDiv
    },
    progress:function(random){
      if(elementsArr.length > 0) {

        var ri =  random ? parseInt(Math.random() * elementsArr.length) : 0

        addStyle(elementsArr[ri], blockRotateStyle())

        rotateAnimation(elementsArr[ri],elementsArr[ri].toBeColor)

        elementsArr.splice(ri,1)
        
        return true
      }
      return false
    }
  }
}