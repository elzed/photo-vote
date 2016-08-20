var chart2;
var marketerChart = marketTotal;

function intializeMarketerChart() {
	var chartProperties = {
		title:{
			text: "All Votes Tallied"
		},
		data: [
		{
			type: "column",
			dataPoints: marketerChart
		}
		]
	};
   chart2 = new CanvasJS.Chart("marketer", chartProperties);
}

window.addEventListener("load", intializeMarketerChart);
