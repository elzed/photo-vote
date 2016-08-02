// Object constructor for product images
var imageObjectConstructor = function(name, source) {
  this.imageSource = source;
  this.forVotes = 0;
  this.name = name;
  this.y = this.forVotes;
  this.label = name;
};

// Array of product image objects
var possibleImages = [
  new imageObjectConstructor("R2D2", "img/bag.jpg"),
  new imageObjectConstructor("Banana", "img/banana.jpg"),
  new imageObjectConstructor("Boots", "img/boots.jpg"),
  new imageObjectConstructor("Chair", "img/chair.jpg"),
  new imageObjectConstructor("Cthulhu", "img/cthulhu.jpg"),
  new imageObjectConstructor("Dragon", "img/dragon.jpg"),
  new imageObjectConstructor("Utensils", "img/pen.jpg"),
  new imageObjectConstructor("Scissors", "img/scissors.jpg"),
  new imageObjectConstructor("Shark", "img/shark.jpg"),
  new imageObjectConstructor("Baby", "img/sweep.jpg"),
  new imageObjectConstructor("Unicorn", "img/unicorn.jpg"),
  new imageObjectConstructor("Tentacle", "img/usb.jpg"),
  new imageObjectConstructor("Watering", "img/water_can.jpg"),
  new imageObjectConstructor("Wine", "img/wine_glass.jpg"),
];

// Event listener to call randomImageSelector() on window load event: function selects three images randomly to display
window.addEventListener("load", randomImageSelector, false);

var imagePanel = document.getElementById("images-holder");

// Event listener to call recordClick() on click event: function records image that is voted on by click
// if (clickCounter < 15) {
  imagePanel.addEventListener("click", recordClick, false);
// }

// Event listener to call randomImageSelector() on click event: function refreshes the selection of images
imagePanel.addEventListener("click", randomImageSelector, false);

var chosenImages = [];
var clickCounter = 0;

// Function randomly selects three images to display
function randomImageSelector() {
  chosenImages = [];
  for (var imageId = 1; imageId <= 3; imageId++) {
    do {
      var index = Math.floor(Math.random() * 14);
    } while (chosenImages.indexOf(index) >= 0);
    var source = possibleImages[index].imageSource;
    document.getElementById("image"+imageId).src = source;
    chosenImages.push(index);
  }
  var clickDisplay = document.getElementById("click-counter");
  clickDisplay.innerHTML = "";
  var clickDisplayNode = document.createTextNode("You have made " + clickCounter + " picks of 15.");
  clickDisplay.appendChild(clickDisplayNode);
};

// Function records image that is clicked on by user and updates vote count for image object
function recordClick(event) {
  var clickedImage = event.target;
  console.log(clickedImage);
  var clickedImageSource = clickedImage.src;
  console.log("Clicked SRC: "+clickedImageSource);
  clickCounter++;
  console.log(clickCounter);
  for (var index = 0; index < possibleImages.length; index++) {
    console.log("  Compare to: "+possibleImages[index].imageSource);
    if (clickedImageSource.indexOf(possibleImages[index].imageSource) >= 0) {
      possibleImages[index].forVotes++;
      possibleImages[index].y++;
      console.log("    Clicked Item: "+possibleImages[index].name);
      console.log(possibleImages[index].forVotes);
      }
    // if (clickCounter === 15) {
    //   console.log("Click counter: " + clickCounter);
    //   break;
    //   }
    }



if (clickCounter >= 15) {
  chart.render();
}
};
