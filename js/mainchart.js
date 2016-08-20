var chart;
var imageChart = imagesToTrack;

function intializeChart() {
	var chartProperties = {
		title:{
			text: "Chosen Images"
		},
		data: [
		{
			type: "column",
			dataPoints: imageChart
		}
		]
	};
   chart = new CanvasJS.Chart("voting-results", chartProperties);
}

window.addEventListener("load", intializeChart);
