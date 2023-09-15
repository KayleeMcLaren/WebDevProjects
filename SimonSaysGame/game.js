var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// checks if the user has clicked on a tile - this starts the game
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// function to get the user's input
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour); // gets the tile the user clicked on and stores it in the userClickedPattern array

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1); // checks the user's selection
});

// checks the user's tile selection
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { // checks if the last tile in the  game pattern is the same as the one the user just selected 
      if (userClickedPattern.length === gamePattern.length){ // checks if both the user and the game have the selected same number of tiles
        setTimeout(function () {
          nextSequence(); // if both are correct, the game moves on to the next level
        }, 1000);
      }
    } else { // if not, it's game over and the game restarts
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

// selects the next tile in the game pattern 
function nextSequence() {
  userClickedPattern = [];
  level++; // increase the game level
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4); //gets a random number
  var randomChosenColour = buttonColours[randomNumber]; // uses random number to pick a colour from the buttonColours array
  gamePattern.push(randomChosenColour); //pushes the randomly chosen colour to the gamePattern array

  //slects the tile and plays the correct sound for that tile
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

// function to animate the tile once it's been clicked on by adding the "pressed" CSS class and removing it after 100 milliseconds
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// function to play a sound for each tile (each tile has a different sound)
function playSound(name) {
  var audio = new Audio(name + ".mp3");
  audio.play();
}

// function to restart the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
