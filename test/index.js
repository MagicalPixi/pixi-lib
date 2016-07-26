var c = document.querySelector('#c')

var context = c.getContext('2d')

var img = new Image

img.src = '/test/test.png'

img.onload = function(){

  c.width = img.width
  c.height = img.height

  context.drawImage(img,0,0)

  re()
}


window.re = function  re() {

  var imd = context.getImageData(0,0,c.width,c.height)

  console.log(imd.data.length,imd.data)

  var d = pixiLib.utils.resizeImageData(imd.data,c.width * 4,2,2,4)

  console.log(d.length,d)

  var imd2 = new ImageData(c.width * 2,c.height * 2)

  d.forEach((v,i)=>{
    imd2.data[i] = v
  })

  c.width = c.width * 2
  c.height = c.height * 2

  context.putImageData(imd2,0,0)
}
