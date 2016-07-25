var body = document.querySelector('body')

var arr = pixiLib.utils.repeat('#000',3).concat(['#fff','#fff'])
  .concat(pixiLib.utils.repeat('#000',3)).concat(pixiLib.utils.repeat('#fff',20))

var i = 0;
var r = 1;

console.log(arr.length)
arr = pixiLib.utils.resizeImageData(arr,6,r)
console.log(arr.length)

var m = pixiLib.utils.matrixManager(arr)

body.appendChild(m.el({
  width:(72*r)+'px',
  background:'#999'
}))