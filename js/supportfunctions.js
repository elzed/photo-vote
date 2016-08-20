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

function chartRemove(event) {
  document.getElementById("chart-container").setAttribute("id", "", false);
}
