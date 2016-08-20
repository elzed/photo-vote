var imagePanel = document.getElementById("imagesholder");
var clickCounter = 0;
var marketTotal = [];
var imagesToTrack = [];

// Object constructor for product images
var imageObjectConstructor = function(name, source) {
  this.imageSource = source;
  this.upVotes = 0;
  this.name = name;
  this.y = this.upVotes;
  this.label = name;
};

// Function pushes image objects into imagesToTrack array
function loadImages() {
  if (localStorage.getItem("images") == null) {
    imagesToTrack.push(new imageObjectConstructor("R2D2", "img/bag.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Banana", "img/banana.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Boots", "img/boots.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Chair", "img/chair.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Cthulhu", "img/cthulhu.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Dragon", "img/dragon.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Utensils", "img/pen.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Scissors", "img/scissors.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Shark", "img/shark.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Baby", "img/sweep.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Unicorn", "img/unicorn.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Tentacle", "img/usb.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Watering", "img/water_can.jpg"));
    imagesToTrack.push(new imageObjectConstructor("Wine", "img/wine_glass.jpg"));
} else {
    var storedImages = JSON.parse(localStorage.getItem("images"));
    for (var i = 0; i < storedImages.length; i++) {
      var image = storedImages[i];
      var tracker = new imageObjectConstructor(image.name, image.imageSource);
      tracker.upVotes = image.upVotes;
      imagesToTrack.push(tracker);
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
    var source = imagesToTrack[index].imageSource;  // get the source for the image
    document.getElementById("image"+imageId).src = source;
    pickedImages.push(index);
    }
    var clickDisplay = document.getElementById("countClicks");
    clickDisplay.innerHTML = "";
    var clickDisplayNode = document.createTextNode("You have voted " + clickCounter + " times");
    clickDisplay.appendChild(clickDisplayNode);
};

// Records data for each image clicked on and increments clickCounter
function recordClick(event) {
  var clickedImage = event.target;
  var clickedImageSource = clickedImage.src;
  clickCounter++;
  imagesHolderOff();
  for (var index = 0; index < imagesToTrack.length; index++) {
    if (clickedImageSource.indexOf(imagesToTrack[index].imageSource) >= 0) {
      imagesToTrack[index].upVotes++;
      imagesToTrack[index].y++;
    } else if (clickCounter < 15 ) {
        setTimeout(imagesHolderTrans, 80);
    }
     else if (clickCounter == 15) {
      imagesHolderOff();
      chart.render();
      continueButton.style.display = "block";
      sessionChartTrans();
      localStorage.setItem("images", JSON.stringify(imagesToTrack));
      resultsButton.style.display = "block";
    }
  }
};



var continueButton = document.getElementById("continueButton");
continueButton.style.display = "none";
var resultsButton = document.getElementById("resultButton");
resultsButton.style.display = "none";

// Function to view chart with all voting results
function viewAll() {
  imagesHolderOff();
  var marketerResults = JSON.parse(localStorage.getItem("images"));
  for (var index = 0; index < marketerResults.length; index++) {
    var image = marketerResults[index];
    marketerTracker = new imageObjectConstructor(image.name, image.imageSource);
    marketerTracker.upVotes = image.upVotes;
    marketerTracker.y = image.upVotes;
    marketerTracker.x = index;
    marketTotal.push(marketerTracker);
    }
    chart2.render();
    resultsButton.style.display = "none";
    marketerChartTrans();
};

// Hide charts and start voting again
function startAgain(event) {
  clickCounter = 0;
  resultsButton.style.display = "none";
  continueButton.style.display = "none";
  imagesHolderOff();
  imagesHolderTrans();
  mainChartOff();
  marketChartOff();
  clickCounter = 0;
  var clickDisplay = document.getElementById("countClicks");
  clickDisplay.innerHTML = "";
  var clickDisplayNode = document.createTextNode("You have voted " + clickCounter + " times");
  clickDisplay.appendChild(clickDisplayNode);
};
