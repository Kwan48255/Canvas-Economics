var msLayer = new Konva.Layer();
var msXStart = 500;
var msXEnd = 800;
var msYStart = 300;
var msYEnd = 75;

function createMSGraph() {
  var title = new Konva.Label({
    x: (msXStart + msXEnd)/2 - 60,
    y: 25
  });

  title.add(new Konva.Text({
    text: 'Money Market',
    fontSize: '18'
  }));

  msLayer.add(title);

  var xAxis = new Konva.Line({
    points: [msXStart, msYStart, msXEnd, msYStart],
    stroke: 'black'
  });

  msLayer.add(xAxis);

  var xAxisLabel = new Konva.Label({
    x: (msXStart + msXEnd)/2 - 60,
    y: 325
  });
  xAxisLabel.add(new Konva.Text({
    text: "Qty of Money",
    fontSize: 18
  }));

  msLayer.add(xAxisLabel)

  var yAxis = new Konva.Line({
    points: [msXStart, msYStart, msXStart, msYEnd],
    stroke: 'black'
  });

  msLayer.add(yAxis);

  var yAxisLabel = new Konva.Label({
    x: msXStart - 50,
    y: 265,
    rotation: -90
  });
  yAxisLabel.add(new Konva.Text({
    text: "Normal Interest Rate",
    fontSize: 18
  }));

  msLayer.add(yAxisLabel);

  var moneyDemand = new Konva.Line({
    points: [msXStart + 10, 100, msXEnd - 30, 290],
    stroke: 'red'
  });

  msLayer.add(moneyDemand);

  var moneyDemandLabel = new Konva.Label({
    x: msXEnd - 50,
    y: 250
  });
  moneyDemandLabel.add(new Konva.Text({
    text: 'MD',
    fontSize: '18'
  }));

  msLayer.add(moneyDemandLabel);

  var msXMiddle = (msXStart + msXEnd)/2 - 20;
  var moneySupply = new Konva.Line({
    points: [msXMiddle, msYStart - 1, msXMiddle, msYEnd],
    stroke: 'red'
  });

  msLayer.add(moneySupply);

  var moneySupplyLabel = new Konva.Label({
    x: msXMiddle - 40,
    y: msYEnd
  });
  moneySupplyLabel.add(new Konva.Text({
    text: 'MS',
    fontSize: '18'
  }));

  msLayer.add(moneySupplyLabel);

  msPlaceEqPoints((msXStart + msXEnd)/2 - 20, (msYStart + msYEnd)/2 + 1, 0)

  return msLayer;
}

function msPlaceEqPoints(x, y, num) {
  var qtyMoneyLine = new Konva.Line({
    points: [x, y, x, msYStart],
    stroke: 'green',
    lineJoin: 'round',
    dash: [16, 5]
  });

  var qtyMoneyLabel = new Konva.Label({
    x: x - 7,
    y: msYStart + 4
  });
  qtyMoneyLabel.add(new Konva.Text({
    text: "Q" + num,
    fontSize: 14
  }));

  msLayer.add(qtyMoneyLine);
  msLayer.add(qtyMoneyLabel);

  var moneyDemandLine = new Konva.Line({
    points: [x+1, y, msXStart, y],
    stroke: 'green',
    lineJoin: 'round',
    dash: [16, 5]
  });

  var moneyDemandLineLabel = new Konva.Label({
    x: msXStart - 25,
    y: y - 7
  });
  moneyDemandLineLabel.add(new Konva.Text({
    text: "IR" + num,
    fontSize: 14
  }));

  msLayer.add(moneyDemandLine);
  msLayer.add(moneyDemandLineLabel);
}
