var xArray = [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var xArray = [5, 7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

var data = [{
    x: xArray,
    y: yArray,
    mode:"lines"
}];

var layout = {
    xaxis: {range: [10, 160], title: "Square Meters"},  
    yaxis: {range: [3, 16], title: "Price in Millions"},
    title: "House Price vs. Size"
};

Plotly.newPlot("myPlot", data, layout);