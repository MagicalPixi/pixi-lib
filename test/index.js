var body = document.querySelector('body')


var m = pixiLib.utils.mpLoading()

body.appendChild(m.el())

var i = 0;


setInterval(function(){

  m.progress(i++)

},100)
window.m = m;