/**
 * Created by zyg on 16/2/4.
 */
var PubSub = require('pubsub-js');

var createActionStates = function () {

};

module.exports = function createAction(name,action) {

  var isStart = false;
  var isEnd = false;

  var actionStates = {
    start: function (data) {
      if(!isStart){
        isStart = true;
        PubSub.publish(name+'Start',data)
      }
    },
    progress: function (data) {
      PubSub.publish(name+'Progress',data);
    },
    end: function (data) {
      if(!isEnd){
        isEnd= true;
        PubSub.publish(name+'End',data)
      }
    },
    on: function (name,callback) {
      PubSub.subscribe(name,function(topic,data){
        callback(data)
      });
    }
  };

  return function () {
    action.apply(actionStates,arguments);
  }
}