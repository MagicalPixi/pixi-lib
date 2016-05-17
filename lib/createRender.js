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

  var w = config.w || DEFAULT_WIDTH;
  var h = config.h || DEFAULT_HEIGHT;

  var renderer = new PIXI.autoDetectRenderer(w, h, {
      transparent:true
    }
  );

  container.appendChild(renderer.view);

  var raf = null;

  return function animate(stage) {

    var animate = function () {

      if(stage.render){
        stage.render();
      }

      stage.children.forEach((function(child){
        if(child.render){
          child.renderCount++;
          child.render();
        }
      }));
      renderer.render(stage);

      raf = requestAnimationFrame(animate);
    };

    animate(stage);

    return function animateCancel(){
      cancelAnimationFrame(raf);
    }
  }
}

createRender.DEFAULT_WIDTH = DEFAULT_WIDTH;
createRender.DEFAULT_HEIGHT = DEFAULT_HEIGHT;

module.exports = createRender;
