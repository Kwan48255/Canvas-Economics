var adasLayer = new Konva.Layer();
var adasXStart = 50;
var adasXEnd = 375;
var adasYStart = 300;
var adasYEnd = 75;

var adMove;
var SRASMove;

function createAdAsGraph() {
  var title = new Konva.Label({
    x: 50,
    y: 25
  });

  title.add(new Konva.Text({
    text: 'Aggregate Demand vs Aggregate Supply',
    fontSize: '18'
  }));

  adasLayer.add(title);

  var xAxis = new Konva.Line({
    points: [adasXStart, adasYStart, adasXEnd, adasYStart],
    stroke: 'black'
  });

  adasLayer.add(xAxis);

  var xAxisLabel = new Konva.Label({
    x: 162.5,
    y: 325
  });
  xAxisLabel.add(new Konva.Text({
    text: "Real GDP",
    fontSize: 18
  }));

  adasLayer.add(xAxisLabel);

  var yAxis = new Konva.Line({
    points: [adasXStart, adasYStart, adasXStart, adasYEnd],
    stroke: 'black'
  });

  adasLayer.add(yAxis);

  var yAxisLabel = new Konva.Label({
    x: 5,
    y: 225,
    rotation: -90
  });
  yAxisLabel.add(new Konva.Text({
    text: "Price Level",
    fontSize: 18
  }));

  adasLayer.add(yAxisLabel);

  // var adStatic = new Konva.Line({
  //   points: [60, 100, 350, 290],
  //   stroke: 'black'
  // });
  //
  // adasLayer.add(adStatic);

  var adStaticLabel = new Konva.Label({
    x: 340,
    y: 250
  });
  adStaticLabel.add(new Konva.Text({
    text: 'AD',
    fontSize: '18'
  }));

  adasLayer.add(adStaticLabel);

  var adMoveLabel = new Konva.Label({
    x: 340,
    y: 250,
    visible: false
  });

  adMove = new Konva.Line({
    points: [60, 100, 350, 290],
    stroke: 'red',
    draggable: true
  });
  adMove.dragBoundFunc(function(pos) {
    var absX = this.getAbsolutePosition().x;
    var pts = this.points();
    var yMax = 32;
    var yMin = -52;
    var y = pos.y;

    if (y > yMax) {
      this.points([60, 132, 318, 258]);
      y = 32;
    }
    if (y < yMin) {
      this.points([112, 152, 350, 290]);
      y = -52;
    }

    if (y > 0 && y < yMax) {
      this.points([60, 100 + pos.y, 350 - pos.y, 290 - pos.y]);
    }
    else if (y < 0 && y > yMin) {
      var xVal = (60 + pos.y * -1 >= 205) ? 205 : 60 + pos.y * -1;
      this.points([xVal, 100 + pos.y * -1, 350, 290]);
    }

    if (y == 0) {
      this.points([60, 100, 350, 290]);
    }

    return {
      x: absX,
      y: y
    }
  });

  adasLayer.add(adMove);

  // var SRAS = new Konva.Line({
  //   points: [60, 290, 350, 100],
  //   stroke: 'blue',
  //   draggable: true
  // });
  //
  // adasLayer.add(SRAS);

  var SRASLabel = new Konva.Label({
    x: 340,
    y: 120
  });
  SRASLabel.add(new Konva.Text({
    text: 'AS',
    fontSize: '18'
  }));

  adasLayer.add(SRASLabel);

  var SRASMove = new Konva.Line({
    points: [60, 290, 350, 100],
    stroke: 'red',
    draggable: true
  });

  SRASMove.dragBoundFunc(function(pos) {
    var absX = this.getAbsolutePosition().x;
    var yMax = 32;
    var yMin = -42;
    var y = pos.y;

    if (y > yMax) {
      this.points([90, 258, 350, 132]);
      y = 32;
    }

    if (y <= yMin) {
      this.points([60, 249, 350, 141]);
      y = -42;
    }

    if (y > 0 && y < yMax) {
      this.points([60 + pos.y, 290 - pos.y, 350, 100 + pos.y]);
    }
    else if (y < 0 && y > yMin) {
      var xVal = (100 + pos.y * -1 >= 205) ? 205 : 100 + pos.y * -1;
      this.points([60, 290 - pos.y * -1, 350, xVal]);
    }

    if (y == 0) {
      this.points([60, 290, 350, 100]);
    }

    return {
      x: absX,
      y: y
    }
  });

  adasLayer.add(SRASMove);

  adasXMid = (adasXStart + adasXEnd) / 2 - 7;
  // var LRAS = new Konva.Line({
  //   points: [adasXMid, adasYStart, adasXMid, adasYEnd],
  //   stroke: 'red'
  // });
  //
  // adasLayer.add(LRAS);
  //
  // var LRASLabel = new Konva.Label({
  //   x: adasXMid + 15,
  //   y: adasYEnd
  // });
  // LRASLabel.add(new Konva.Text({
  //   text: 'LRAS',
  //   fontSize: 18
  // }));
  //
  // adasLayer.add(LRASLabel);

  // adasPlaceEqPoint(adasXMid, (adasYStart + adasYEnd)/2 + 8, 0);

  return adasLayer;
}

function moveAD(pos) {
  var yMax = 32;
  var yMin = -52;
  var y = pos.y;

  if (y > yMax) {
    adMove.points([60, 132, 318, 258]);
    y = 32;
  }
  if (y < yMin) {
    adMove.points([112, 152, 350, 290]);
    y = -52;
  }

  if (y > 0 && y < yMax) {
    adMove.points([60, 100 + pos.y, 350 - pos.y, 290 - pos.y]);
  }
  else if (y < 0 && y > yMin) {
    var xVal = (60 + pos.y * -1 >= 205) ? 205 : 60 + pos.y * -1;
    adMove.points([xVal, 100 + pos.y * -1, 350, 290]);
  }

  if (y == 0) {
    adMove.points([60, 100, 350, 290]);
  }

  adMove.y(y);

  stage.draw();
}

function adasPlaceEqPoint(x, y, num) {
  var gdpLine = new Konva.Line({
    points: [x, y, x, adasYStart],
    stroke: 'green',
    lineJoin: 'round',
    dash: [16, 5]
  });

  var gdpLineLabel = new Konva.Label({
    x: x - 8,
    y: adasYStart + 5
  });
  gdpLineLabel.add(new Konva.Text({
    text: "Q" + num,
    fontSize: 14
  }));

  adasLayer.add(gdpLine);
  adasLayer.add(gdpLineLabel)

  var priceLevelLine = new Konva.Line({
    points: [x, y, adasXStart, y],
    stroke: 'green',
    lineJoin: 'round',
    dash: [16, 5]
  });

  var priceLevelLineLabel = new Konva.Label({
    x: adasXStart - 20,
    y: y - 7
  });
  priceLevelLineLabel.add(new Konva.Text({
    text: "P" + num,
    fontSize: 14
  }));

  adasLayer.add(priceLevelLine);
  adasLayer.add(priceLevelLineLabel);
}
