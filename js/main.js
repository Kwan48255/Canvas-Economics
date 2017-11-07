var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height
});

var adasLayer = createAdAsGraph();
var msLayer = createMSGraph();
stage.add(adasLayer);
stage.add(msLayer);
