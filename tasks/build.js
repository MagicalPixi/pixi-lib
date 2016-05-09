/**
 * Created by zyg on 16/1/31.
 */
var path = require('path');
var fs = require('fs');

var libPath = '../lib';

var indexJSFile = 'index.js';

var indexJS = fs.readdirSync(path.resolve(__dirname,libPath)).map(function (js) {
  return {
    key:js.replace('.js',''),
    path:'./lib/'+js
  }
}).reduce(function (init, next) {

  return init + next.key + ':require("' + next.path + '"),'

},'');

indexJS = 'var pixiLib = {' + indexJS + '};';

indexJS += 'module.exports= pixiLib;window.pixiLib=pixiLib;';


fs.writeFile(indexJSFile,indexJS);
