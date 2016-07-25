/**
 * Created by zyg on 16/7/5.
 */

var addStyle = require('./addStyle')

var cw = 100;
var ch = 100;

var containerStyle=  {
  backgroundColor:'#f0f0f0',
  width:'100%',
  height:'100%',
  position:'fixed',
  top:0,
  left:0,
}

var blackBgStyle = {
  backgroundColor:'#000',
  opacity:0.7,
  width:'100%',
  height:'100%',
  position:'absolute',
  top:0,
  left:0,
}


var iconContainerStyle = {
  backgroundColor:'#fff',
  width:cw+'px',
  height:ch+'px',
  position:'absolute',
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  overflow:'hidden',
}


var topCoverStyleFn = function () {

  var topW = 50
  var topH = 40

  var c = containerStyle.backgroundColor

  return {
    width:0,
    height:0,
    border:'solid',
    borderWidth:topH + 'px ' + topW + 'px ' + topH + 'px ' + topW + 'px ',
    borderColor:c + ' transparent transparent transparent',
    position:'absolute',
    top:0,
    left:0,
    zIndex:1,
  }
}

var bottomCoverStyleFn = function(lOrR){

  var bh = 32
  var bw = 50

  var l = 15

  var c = containerStyle.backgroundColor

  return {
    width:0,
    height:0,
    border:'50px solid',
    borderWidth:bh + 'px ' + bw + 'px ' + bh + 'px ' + bw + 'px ',
    borderColor: lOrR ? 'transparent transparent ' + c + ' '  + c:  'transparent '+c+' ' +c+' transparent',
    position:'absolute',
    bottom:0,
    left: (lOrR ? l : cw - l - bw*2)+'px',
    zIndex:1,
  }
}

var fillStyleFn = function(){

  return {
    backgroundColor:'#000',
    width:'100%',
    height:'100%',
    position:'absolute',
    left:'-100%',
    top:0,
  }
}



module.exports = function(){

  console.warn('to be deprecated.suggest to use loading.basicLoading')

  var containerBox = document.createElement('div')

  var container = document.createElement('div')
  var containerBg = document.createElement('div')

  var topCover = document.createElement('div')

  var blCover = document.createElement('div')

  var brCover = document.createElement('div')

  var fill = document.createElement('div')

  addStyle(containerBox,containerStyle)
  addStyle(containerBg,blackBgStyle)

  addStyle(container,iconContainerStyle)

  addStyle(fill,fillStyleFn())

  addStyle(topCover,topCoverStyleFn())
  addStyle(blCover,bottomCoverStyleFn(true))
  addStyle(brCover,bottomCoverStyleFn())


//  containerBox.appendChild(containerBg)
  containerBox.appendChild(container)

  container.appendChild(topCover)
  container.appendChild(blCover)
  container.appendChild(brCover)
  container.appendChild(fill)
  
  var allProgress = 0;
  
  return {
    el:function(){
      
      return containerBox
    },
    load:function(progress){
      if(progress < 100){
        allProgress = progress
        fill.style.transform = 'translate('+allProgress+'%,0%)'
      }
    },
    autoLoad:function(cb){
      
      var si=setInterval(function(){
        
        allProgress++;
        
        fill.style.transform = 'translate('+allProgress+'%,0%)'

        cb && cb(allProgress)
        
      },200)
      
      return function(){
        clearInterval(si)
      }
    }
  }
}