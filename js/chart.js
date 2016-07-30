var chart;
var fruitInfo = [
   { label: "apple",  y: 10  },
   { label: "orange", y: 15  },
   { label: "banana", y: 25  },
   { label: "mango",  y: 30  },
   { label: "grape",  y: 28  }
];

function intializeChart() { //was window.onload = function
	var chartProperties = { //made chart global by moving 'var' out of function
		title:{
			text: "My First Chart in CanvasJS"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: fruitInfo
		}
		]
	};
   chart = new CanvasJS.Chart("chart-container", chartProperties); //added line
	chart.render();
}

window.addEventListener("load", intializeChart);
