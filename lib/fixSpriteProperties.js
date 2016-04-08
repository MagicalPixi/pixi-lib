/**
 * 修正精灵属性，比如play和stop不能同时存在，容易毫无意思。
 * @param settingProperties
 * @param finalProperties
 * @returns {*}
 */

module.exports = function fixProperties(settingProperties,finalProperties){

  if(settingProperties.play !== undefined){
    delete finalProperties.stop;
  }
  if(settingProperties.stop !== undefined){
    delete finalProperties.play;
  }

  var finalKeys = Object.keys(finalProperties).filter((key)=>{
    return /playAction/.test(key)
  });

  var settingKeys = Object.keys(settingProperties).filter((key)=>{
    return /playAction/.test(key)
  });

  finalKeys.map(key=>{
    if(settingKeys.indexOf(key) === -1){
      delete finalProperties[key];
    }
  });

  if(settingKeys.length > 0){
    delete finalProperties.stop;
  }

  return finalProperties;
};