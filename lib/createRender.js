/**
 * 创建一个渲染器
 * @param container
 * @param config
 * @returns {Function}
 */
module.exports = function (container,config) {

  if(!config){
    config = {};
  }

  var w = config.w || 640;
  var h = config.h || 1004;

  var renderer = new PIXI.autoDetectRenderer(w, h, {
      transparent:true
    }
  );

  container.appendChild(renderer.view);

  var raf = null;

  return function animate(stage) {

    var animate = function () {

      stage.children.forEach((function(child){
        if(child.render){
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
};
