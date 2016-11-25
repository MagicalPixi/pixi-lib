var _ = require('lodash')
var canvasManager = require('./canvasManager')
var DEFAULT_WIDTH = 640;

var DEFAULT_HEIGHT = 1004;
/**
 * 创建一个渲染器
 * @param container
 * @param config
 * @returns {Function}
 */

function createRender(container,config) {

  if(!config){
    config = {};
  }

  config.w = config.w || DEFAULT_WIDTH;
  config.h = config.h || DEFAULT_HEIGHT;
  config.bg = config.bg || '#fff';
  config.transparent = config.transparent || true

  var renderer = new PIXI.autoDetectRenderer(config.w, config.h, config);
  if (!renderer.view.parentElement) {
    container.appendChild(renderer.view);
  }
  if (config.canvasKey) {
    canvasManager.setCanvas(config.canvasKey, renderer.view)
  }
  var raf = null;

  return function animate(stage) {

    if(_.isFunction(stage)){
      stage = stage()
    }

    cancelAnimationFrame(raf);

    var animate = function (s,cb) {

      raf = requestAnimationFrame(function(){
        animate(s,cb);
      });

      if(s.render){
        s.render();
      }

      s.children.forEach((function(child){
        if(child.render){
          child.render();
        }
      }));
      renderer.render(s);

      cb && cb();
    };

    animate(stage);

    return {
      cancel:function animateCancel(){
        cancelAnimationFrame(raf);
      },
      startDuration:function start(duration){
        animate(stage);
        if(duration>0){
          setTimeout(function () {
            cancelAnimationFrame(raf);
          },duration)
        }
      },
      startCount:function start(count){
        var i = 0;
        animate(stage,function(){
          i++;
          if(i > count){
            cancelAnimationFrame(raf);
          }
        });
      }
    }
  }
}

createRender.DEFAULT_WIDTH = DEFAULT_WIDTH;
createRender.DEFAULT_HEIGHT = DEFAULT_HEIGHT;

module.exports = createRender;
