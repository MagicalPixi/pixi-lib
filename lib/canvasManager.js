var canvases = {}

var getCanvas = function(key) {
  return canvases[key]
}

var setCanvas = function(key, canvas) {
  canvases[key] = canvas
}
module.exports = {
  getCanvas: getCanvas,
  setCanvas: setCanvas
}
