/**
 * Created by zyg on 16/7/20.
 */

var matrixManager = require('./matrixManager')
var repeate = require('./repeat')

var cgrey = 'rgb(169,197,202)',
  cyellow = 'rgb(245,207,56)',
  cred = 'rgb(234, 108, 95)',
  cgreen = 'rgb(49, 210, 76)',
  cblack = 'rgb(66,91,112)',
  corange = 'rgb(208,127,52)',
  cpurple = 'rgb(95,100,136)',
  cblue = 'rgb(34,189,250)';

var colorArr = []
  .concat(repeate('transparent',3)).concat(repeate('#000',5)).concat(repeate('transparent',3))
  .concat(repeate('transparent',1)).concat(repeate('#000',9)).concat(repeate('transparent',1))
  .concat(['transparent','#000',cgrey,cyellow]).concat(repeate('#000',3)).concat(['transparent','#000',cred,cyellow].reverse())
  .concat(repeate('#000',2)).concat([cgreen,cred]).concat(repeate('#000',3)).concat([cblack,corange]).concat(repeate('#000',2))
  .concat(repeate('#000',2)).concat([cpurple,cblack,cyellow,'#000',cgreen,cyellow,cblack]).concat(repeate('#000',2))
  .concat(repeate('#000',2)).concat([corange,cred,cblack,cgreen,corange,cblack,cgreen]).concat(repeate('#000',2))
  .concat(repeate('#000',2)).concat([cblack,cgreen,'#000',cred,'#000',corange,cred]).concat(repeate('#000',2))
  .concat(repeate('#000',2)).concat([cred,cblack]).concat(repeate('#000',3)).concat([cyellow,cblack]).concat(repeate('#000',2))
  .concat(['transparent','#000']).concat([cblue,cgreen]).concat(repeate('#000',3)).concat([cred,cgreen]).concat(['#000','transparent'])
  .concat(repeate('transparent',1)).concat(repeate('#000',9)).concat(repeate('transparent',1))
  .concat(repeate('transparent',3)).concat(repeate('#000',5)).concat(repeate('transparent',3))

module.exports = function(){

  console.warn('to be deprecated.suggest to use loading.mpLoading')

  var m = matrixManager(colorArr)

  return {
    el:function () {
      return m.el()
    },
    progress:function(){
      return m.progress(1)
    }
  }
}