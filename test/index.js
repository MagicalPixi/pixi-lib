var body = document.querySelector('body')


var loading = pixiLib.utils.basicLoading()

body.appendChild(loading.el())

var i = 0;


setInterval(function(){

  loading.load(i++)

},100)