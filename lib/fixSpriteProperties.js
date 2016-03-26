/**
 * 修正精灵属性，比如play和stop不能同时存在，容易毫无意思。
 * @param properties
 * @param newProperties
 * @returns {*}
 */

module.exports = function fixProperties(properties,newProperties){

  if(properties.play !== undefined){
    delete newProperties.stop;
  }
  if(properties.stop !== undefined){
    delete newProperties.play;
  }

  return newProperties;
};