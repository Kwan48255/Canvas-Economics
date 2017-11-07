var phillipsLayer = new Konva.Layer();
var phillipsXStart = 925;
var phillipsXEnd = 1225;
var phillipsYStart = 300;
var phillipsYEnd = 75;

function createPhillipsCurve() {
  var title = new Konva.Label({
    x: (phillipsXStart + phillipsXEnd)/2 - 60,
    y: 25
  });

  title.add(new Konva.Text({
    text: 'Phillips Curve',
    fontSize: '18'
  }));

  phillipsLayer.add(title);

  var xAxis = new Konva.Line({
    points: [phillipsXStart, phillipsYStart, phillipsXEnd, phillipsYStart],
    stroke: 'black'
  });

  phillipsLayer.add(xAxis);

  var xAxisLabel = new Konva.Label({
    x: (phillipsXStart + phillipsXEnd)/2 - 80,
    y: 325
  });
  xAxisLabel.add(new Konva.Text({
    text: "Unemployment Rate",
    fontSize: 18
  }));

  phillipsLayer.add(xAxisLabel)

  var yAxis = new Konva.Line({
    points: [phillipsXStart, phillipsYStart, phillipsXStart, phillipsYEnd],
    stroke: 'black'
  });

  phillipsLayer.add(yAxis);

  var yAxisLabel = new Konva.Label({
    x: phillipsXStart - 50,
    y: 235,
    rotation: -90
  });
  yAxisLabel.add(new Konva.Text({
    text: "Inflation Rate",
    fontSize: 18
  }));

  phillipsLayer.add(yAxisLabel);

  var phillipsXMiddle = (phillipsXStart + phillipsXEnd)/2 - 20;
  var LRPC = new Konva.Line({
    points: [phillipsXMiddle, phillipsYStart - 1, phillipsXMiddle, phillipsYEnd],
    stroke: 'red'
  });

  phillipsLayer.add(LRPC);

  var LRPCLabel = new Konva.Label({
    x: phillipsXMiddle - 60,
    y: phillipsYEnd
  });
  LRPCLabel.add(new Konva.Text({
    text: 'LRPC',
    fontSize: '18'
  }));

  phillipsLayer.add(LRPCLabel);

  var SRPC = new Konva.Line({
    points: [phillipsXStart + 10, 100, phillipsXEnd - 30, 290],
    stroke: 'red'
  });

  phillipsLayer.add(SRPC);

  var SRPCLabel = new Konva.Label({
    x: phillipsXEnd - 50,
    y: 250
  });
  SRPCLabel.add(new Konva.Text({
    text: 'SRPC',
    fontSize: '18'
  }));

  phillipsLayer.add(SRPCLabel);

  phillipsPlaceEqPoints((phillipsXStart + phillipsXEnd)/2 - 20, (phillipsYStart + phillipsYEnd)/2 + 1, 0)

  return phillipsLayer;
}

function phillipsPlaceEqPoints(x, y, num) {
  var unemploymentLine = new Konva.Line({
    points: [x, y, x, phillipsYStart],
    stroke: 'green',
    lineJoin: 'round',
    dash: [16, 5]
  });

  var unemploymentLabel = new Konva.Label({
    x: x - 7,
    y: phillipsYStart + 4
  });
  unemploymentLabel.add(new Konva.Text({
    text: "U" + num,
    fontSize: 14
  }));

  phillipsLayer.add(unemploymentLine);
  phillipsLayer.add(unemploymentLabel);

  var inflationLine = new Konva.Line({
    points: [x+1, y, phillipsXStart, y],
    stroke: 'green',
    lineJoin: 'round',
    dash: [16, 5]
  });

  var inflationLineLabel = new Konva.Label({
    x: phillipsXStart - 25,
    y: y - 7
  });
  inflationLineLabel.add(new Konva.Text({
    text: "II" + num,
    fontSize: 14
  }));

  phillipsLayer.add(inflationLine);
  phillipsLayer.add(inflationLineLabel);
}
