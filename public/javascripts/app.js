// Let's do this - basic style

// Store the cat clicks in local storage, increment them on click
// First, set up a catClicker class, using prototypical inheritance
var catClicker = function() {
  this.init = function() {
    var currentClicks = 0;
    if (localStorage.getItem('catClicks') === null) {
      // Initiate the clicker
      localStorage.setItem('catClicks', 0);
    } else {
      // Update the visible counter
      currentClicks = localStorage.getItem('catClicks');
      this.updateVisibleTotal(currentClicks);
    }
    // Attach a listener
    var catImage = document.getElementById('cat');
    // Putting "this" in a container so that it isn't lost in callbacks
    var _this = this;
    catImage.addEventListener('click', function() {
      currentClicks++;
      _this.setClickTotal(currentClicks);
      _this.updateVisibleTotal(currentClicks);
    }, false);
    // Listen for reset click
    document.getElementById('reset').addEventListener('click', function() {
      localStorage.setItem('catClicks', 0);
      _this.init();
    }, false);
  }
  this.setClickTotal = function(clicks) {
    localStorage.setItem('catClicks', clicks);
  }
  this.updateVisibleTotal = function(clicks) {
    var counter = document.getElementById('counter');
    counter.textContent = clicks;
  }
}

// Instantiate the new CatClicker and initialise
var cat = new catClicker();
cat.init();


