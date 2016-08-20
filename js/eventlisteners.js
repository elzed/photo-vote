// Event listener to call recordClick() on click event: function records image that is voted on by click
imagePanel.addEventListener("click", recordClick, false);

// Event listener to call randomImageSelector() on click event: function refreshes the selection of images
imagePanel.addEventListener("click", randomImageSelector, false);



// Calls randomImageSelector on window load event: function selects three images randomly to display
window.addEventListener("load", randomImageSelector, false);


// Calls randomImageSelector from pickimages.js
// document.getElementById("againbutton").addEventListener("click", randomImageSelector, false);


// Calls restartPoll to clear chart and start poll again
document.getElementById("againbutton").addEventListener("click", restartPoll, false);


// document.getElementById("againbutton").addEventListener("click", chartRemove, false);
