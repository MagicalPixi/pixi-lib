/**
 * Created by zyg on 16/1/31.
 */
var path = require('path')
var fs = require('fs')

var libPath = 'lib'
var libUtilsPath = 'lib/utils'
var audioPath = 'lib/audio'

var indexJsFile = 'index.js'

function buildObj(p) {

  var dirPath = path.resolve(__dirname,'../',p)

  var indexJs = fs.readdirSync(path.resolve(__dirname, dirPath)).filter(js=> {
    return /\.js$/.test(js)
  }).map(function (js) {
    return {
      key: js.replace('.js', ''),
      path: './'+path.join('./',p,js)
    }
  }).reduce(function (init, next) {

    return init + next.key + ':require("' + next.path + '"),'

  }, '')

  return indexJs
}

var indexJs = buildObj(libPath)
var utilsJs = buildObj(libUtilsPath)
var audioJs = buildObj(audioPath)

utilsJs = `utils:{${utilsJs}},`;
audioJs = `audio:{${audioJs}},`;

indexJs = 'var pixiLib = {' + indexJs + utilsJs + audioJs + '};'

indexJs += 'if( typeof window !== "undefined" ){ \n' +
  'window.pixiLib=pixiLib; \n' +
  '} \n' +
  'if(typeof module !== "undefined" ){  \n' +
   'module.exports= pixiLib; \n' +
  '}'


fs.writeFile(indexJsFile,indexJs)
