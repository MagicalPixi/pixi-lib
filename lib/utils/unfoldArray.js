/**
 * Created by zyg on 16/8/28.
 */
function unfoldArray(fromArr,arr) {
  if(fromArr.length > 0){
    var v = fromArr[0];

    if(_.isArray(v)){
      var unV = unzipArr(v,[]);
      arr = arr.concat(unV);
    }else{
      arr = arr.concat(v);
    }
    return unfoldArray(fromArr.slice(1),arr);
  }else{
    return arr;
  }
}


module.exports = unfoldArray;