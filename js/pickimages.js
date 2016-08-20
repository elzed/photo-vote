var clickCounter = 0;
var imagePanel = document.getElementById("images-holder");

// Object constructor for product images
var imageObjectConstructor = function(name, source) {
  this.imageSource = source;
  this.forVotes = 0;
  this.name = name;
  this.y = this.forVotes;
  this.label = name;
};

// Array of product image objects
var possibleImages = [];

var storedImages = JSON.parse(localStorage.getItem("images"));

// Function pushes image objects into possibleImages array
function loadImages() {
  if (localStorage.getItem("images") == null) {
    possibleImages.push(new imageObjectConstructor("R2D2", "img/bag.jpg"));
    possibleImages.push(new imageObjectConstructor("Banana", "img/banana.jpg"));
    possibleImages.push(new imageObjectConstructor("Boots", "img/boots.jpg"));
    possibleImages.push(new imageObjectConstructor("Chair", "img/chair.jpg"));
    possibleImages.push(new imageObjectConstructor("Cthulhu", "img/cthulhu.jpg"));
    possibleImages.push(new imageObjectConstructor("Dragon", "img/dragon.jpg"));
    possibleImages.push(new imageObjectConstructor("Utensils", "img/pen.jpg"));
    possibleImages.push(new imageObjectConstructor("Scissors", "img/scissors.jpg"));
    possibleImages.push(new imageObjectConstructor("Shark", "img/shark.jpg"));
    possibleImages.push(new imageObjectConstructor("Baby", "img/sweep.jpg"));
    possibleImages.push(new imageObjectConstructor("Unicorn", "img/unicorn.jpg"));
    possibleImages.push(new imageObjectConstructor("Tentacle", "img/usb.jpg"));
    possibleImages.push(new imageObjectConstructor("Watering", "img/water_can.jpg"));
    possibleImages.push(new imageObjectConstructor("Wine", "img/wine_glass.jpg"));
} else {
    for (var i = 0; i < storedImages.length; i++) {
      var image = storedImages[i];
      var tracker = new imageObjectConstructor(image.name, image.imageSource);
      tracker.forVotes = image.forVotes;
      possibleImages.push(tracker);
      }
    }
  randomImageSelector();
  imagesHolderTrans();
};

// Function randomly selects three images to display
function randomImageSelector() {
  var pickedImages = []; // Empty this so that we can track 3 new images
  for (var imageId = 1; imageId <= 3; imageId++) {
    do {  // get a random index value for our image
      var index = Math.floor(Math.random() * 14);
    } while (pickedImages.indexOf(index) >= 0);  // keep trying until it's unique
    var source = possibleImages[index].imageSource;  // get the source for the image
    document.getElementById("image"+imageId).src = source;
    pickedImages.push(index);
    }
    var clickDisplay = document.getElementById("click-counter");
    clickDisplay.innerHTML = "";
    var clickDisplayNode = document.createTextNode("You have voted " + clickCounter + " times.");
    clickDisplay.appendChild(clickDisplayNode);
};

// Function records image that is clicked on by user and updates vote count for image object
function recordClick(event) {
  var clickedImage = event.target;
  var clickedImageSource = clickedImage.src;
  clickCounter++;
  imagesHolderReverse();
  for (var index = 0; index < possibleImages.length; index++) {
    if (clickedImageSource.indexOf(possibleImages[index].imageSource) >= 0) {
      possibleImages[index].forVotes++;
      possibleImages[index].y++;
    } else if (clickCounter < 15 ) {
        setTimeout(imagesHolderTrans, 250);
    }
     else if (clickCounter == 15) {
      imagesHolderReverse();
      chart.render();
      continueButtonQuery.style.display = "block";
      sessionChartTrans();
      localStorage.setItem("images", JSON.stringify(possibleImages));
    }
  }
};

var marketerResults = [];

var marketerTotals = [];

// Function to view chart with all voting results
// function viewAll() {
//   imagesHolderReverse();
//   var marketerResults = JSON.parse(localStorage.getItem("images"));
//   for (var index = 0; index < marketerResults.length; index++) {
//     var image = marketerResults[index];
//     marketerTracker = new imageObjectConstructor(image.name, image.imageSource);
//     marketerTracker.forVotes = image.forVotes;
//     marketerTracker.y = image.forVotes;
//     marketerTracker.x = index;
//     marketerTotals.push(marketerTracker);
//     }
//     sessionChartReverse();
//     chart2.render();
//     resultsButtonQuery.style.display = "none";
//     clearResultsQuery.style.display = "block";
//     marketerChartTrans();
// };

var continueButtonQuery = document.querySelector("input#continue-button");
continueButtonQuery.style.display = "none";

var resultsButtonQuery = document.querySelector("input#results-button");
resultsButtonQuery.style.display = "none";

var clearResultsQuery = document.querySelector("input#clear-results-button")
clearResultsQuery.style.display = "none";

// Function to hide marketer chart and return to voting
function returnToVoting() {
  marketerChartReverse();
  sessionChartReverse();
  imagesHolderTrans();
  clearResultsQuery.style.display = "none";
};

// Function to hide session results chart and continue voting
function continueOn(event) {
  clickCounter = 0;
  imagesHolderReverse();
  randomImageSelector();
  imagesHolderTrans();
  resultsButtonQuery.style.display = "block";
  continueButtonQuery.style.display = "none";
  sessionChartReverse();
};

//Function to set class attribute("chart-transition") of div("results-wrapper")
function sessionChartTrans() {
  document.getElementById("results-wrapper").setAttribute("class", "chart-transition");
};

//Function to remove class attribute of div("results-wrapper")
function sessionChartReverse() {
  document.getElementById("results-wrapper").setAttribute("class", "");
};

//Function to set class attribute("chart-transition") of div("marketer-wrapper")
function marketerChartTrans() {
  document.getElementById("marketer-wrapper").setAttribute("class", "chart-transition");
}

//Function to remove class attribute of div("marketer-wrapper")
function marketerChartReverse() {
  document.getElementById("marketer-wrapper").setAttribute("class", "");
};

//Function to set class attribute("images-transition") of div("images-holder")
function imagesHolderTrans() {
  document.getElementById("images-holder").setAttribute("class", "images-transition");
};

//Function to remove class attribute of div("images-holder")
function imagesHolderReverse() {
  document.getElementById("images-holder").setAttribute("class", "");
};
