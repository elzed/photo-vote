var marketerResults = []; // MAY BE DELETED !!!!!!!!!!!
var marketerTotals = []; // MAY BE DELETED !!!!!!!!!!!

// Clear chart to start poll again
function restartPoll(event) {
  clickCounter = 0;
  // imagesHolderReverse();
  randomImageSelector();
  // imagesHolderTrans();
  // resultsButtonQuery.style.display = "block";
  // continueButtonQuery.style.display = "none";
  // sessionChartReverse();
};


// Function to view chart with all voting results
function viewAll() {
  imagesHolderReverse();
  var marketerResults = JSON.parse(localStorage.getItem("images"));
  for (var index = 0; index < marketerResults.length; index++) {
    var image = marketerResults[index];
    marketerTracker = new Image(image.name, image.imageSource);
    marketerTracker.forVotes = image.forVotes;
    marketerTracker.y = image.forVotes;
    marketerTracker.x = index;
    marketerTotals.push(marketerTracker);
    }
    sessionChartReverse();
    chart2.render();
    resultsButtonQuery.style.display = "none";
    clearResultsQuery.style.display = "block";
    marketerChartTrans();
};
