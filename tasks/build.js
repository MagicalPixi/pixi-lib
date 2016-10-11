/**
 * Created by zyg on 16/1/31.
 */
var path = require('path')
var fs = require('fs')

var dirName = 'lib';
var libPath = path.resolve(__dirname,`../${dirName}`);

var otherDirs = fs.readdirSync(libPath).filter(name=>{
  var p = path.join(libPath,name);
  return fs.lstatSync(p).isDirectory();
});

//var libUtilsPath = 'lib/utils'
//var audioPath = 'lib/audio'
//var loadingPath = 'lib/loading'
//
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

  }, '');

  return indexJs
}

var indexJs = buildObj(dirName)
var otherJs = otherDirs.map(name=>{
  var p = path.join(dirName,name);

  return `${name}:{${buildObj(p)}},`;
}).join(' ');


indexJs = 'var pixiLib = {' + indexJs + otherJs + '};'

indexJs += 'if( typeof window !== "undefined" ){ \n' +
  'window.pixiLib=pixiLib; \n' +
  '} \n' +
  'if(typeof module !== "undefined" ){  \n' +
   'module.exports= pixiLib; \n' +
  '}'


fs.writeFile(indexJsFile,indexJs)
