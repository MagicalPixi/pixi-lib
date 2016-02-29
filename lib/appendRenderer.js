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

  var stage = new PIXI.Container();

  var raf = null;

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

  stage.clearRender = function () {
    cancelAnimationFrame(raf);

    renderer.view.remove();
  };

  return stage;
};