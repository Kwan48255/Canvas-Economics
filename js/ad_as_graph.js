var adasLayer = new Konva.Layer();
var adasXStart = 50;
var adasXEnd = 375;
var adasYStart = 300;
var adasYEnd = 75;

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

  var adStatic = new Konva.Line({
    points: [60, 100, 350, 290],
    stroke: 'black'
  });

  adasLayer.add(adStatic);

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

  var adMove = new Konva.Line({
    points: [60, 100, 350, 290],
    stroke: 'red',
    draggable: true
  });
  adMove.dragBoundFunc(function(pos) {
    var absX = this.getAbsolutePosition().x;
    var pts = this.points();
    var yMax = 10;
    var yMin = -10;
    var y = pos.y;

    if (pts[1] >= 195 && pts[2] <= 255 && pts[3] <= 195 && y >= 95) {
      this.points([60, 195, 255, 195]);
      y = 95;
    }
    else if (pts[1] >= 290 && y <= -190) {
      this.points([205, 290, 350, 290]);
      y = -190;
    }
    else {
      if (y > yMax) {
        this.points([60, 100 + pos.y, 350 - pos.y, 290 - pos.y]);
      }

      if (y == 0) {
        this.points([60, 100, 350, 290]);
      }

      if (y < yMin) {
        var xVal = (60 + pos.y * -1 >= 205) ? 205 : 60 + pos.y * -1;
        this.points([xVal, 100 + pos.y * -1, 350, 290]);
      }
    }

    adMoveLabel.visible = true;

    return {
      x: absX,
      y: y
    }
  });

  adasLayer.add(adMove);


  var SRAS = new Konva.Line({
    points: [60, 290, 350, 100],
    stroke: 'red'
  });

  adasLayer.add(SRAS);

  var SRASLabel = new Konva.Label({
    x: 340,
    y: 120
  });
  SRASLabel.add(new Konva.Text({
    text: 'SRAS',
    fontSize: '18'
  }));

  adasLayer.add(SRASLabel);

  adasXMid = (adasXStart + adasXEnd) / 2 - 7;
  var LRAS = new Konva.Line({
    points: [adasXMid, adasYStart, adasXMid, adasYEnd],
    stroke: 'red'
  });

  adasLayer.add(LRAS);

  var LRASLabel = new Konva.Label({
    x: adasXMid + 15,
    y: adasYEnd
  });
  LRASLabel.add(new Konva.Text({
    text: 'LRAS',
    fontSize: 18
  }));

  adasLayer.add(LRASLabel);

  adasPlaceEqPoint(adasXMid, (adasYStart + adasYEnd)/2 + 8, 0);

  return adasLayer;
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
