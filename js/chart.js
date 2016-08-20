var chart;
var imageChart = possibleImages;

// var fruitInfo = [
//    { label: "apple",  y: 10  },
//    { label: "orange", y: 15  },
//    { label: "banana", y: 25  },
//    { label: "mango",  y: 30  },
//    { label: "grape",  y: 28  }
// ];

function intializeChart() {		//was window.onload = function
	var chartProperties = {			//made chart global by moving 'var' out of function
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
   chart = new CanvasJS.Chart("chart-container", chartProperties); //added line
	// chart.render();
}

window.addEventListener("load", intializeChart);
