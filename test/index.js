var root = document.getElementById('root');

var pixiLib = require('../index');

var loader = pixiLib.createLoader({
  publicPath:'/dist/'
});

var stage = pixiLib.appendRenderer(root);

loader.add('sprites').load(function () {

  var a0 = document.getElementById('ac0');
  var a1 = document.getElementById('ac1');
  var a2 = document.getElementById('ac2');

  var sprite = pixiLib.getSp({
    textures:pixiLib.getTextures('sprites')
  },[1, 2, 4, 5, 9, 12]);

  stage.addChild(sprite);

  sprite.x=0;
  sprite.y=0;
  sprite.scale.x = 0.5;
  sprite.scale.y = 0.5;
  sprite.animationSpeed = 0.1;


  a0.onclick = function () {
    sprite.playAction(3)
  };
  a1.onclick = function () {
    sprite.playAction(4,true)
  };
  a2.onclick = function () {
    sprite.playAction(5)
  };

});
