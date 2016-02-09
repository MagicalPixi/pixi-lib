/**
 * Created by zyg on 16/2/4.
 */
var PubSub = require('pubsub-js');

function createAction(name,action) {

  var isStart = false;
  var isEnd = false;

  var actionStates = {
    start: function (data) {
      isEnd = false;
      PubSub.publish(name+'Start',data)
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
    on: function (name,callback,extra) {
      PubSub.subscribe(name,function(topic,data){
        callback(data)
      });
    }
  };

  return function () {
    action.apply(actionStates,arguments);
  }
}

createAction.dispatch = PubSub.publish.bind(PubSub);

module.exports = createAction;