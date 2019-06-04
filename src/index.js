var d3 = require("d3");

setInterval(() => {
  run();
}, 2000);

function run() {
  render([
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100
  ]);
}

function render(data, height = 100, margin = 5, maxHeightLayer = 500) {
  const maxData = Math.max(...data);
  var oldBars = d3.selectAll("rect");

  var color = d3
    .scaleLinear()
    .domain([0, maxData / 2, maxData])
    .range(["green", "yellow", "red"]);

  d3.select("svg")
    .attr("height", data.length * 100 + 50)
    .attr("width", maxHeightLayer)
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .merge(oldBars)
    .attr("height", height)
    .attr("y", (d, i) => i * height + i * margin)
    .style("fill", color)
    .transition()
    .attr("width", d => maxHeightLayer / (maxData / d));
}
