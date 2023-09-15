var numberOfDrumButtons = document.querySelectorAll(".drum").length; // gets the number of drum buttons

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() { // adds an event listener to check if the drum button has been clicked 

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); // if it has been clicked, the correct spound is played

    buttonAnimation(buttonInnerHTML); // if it has been clicked, the button gets "animated"

  });

}

document.addEventListener("keypress", function(event) { // adds an event listener to check if the corresponding key has been pressed for each drum button

  makeSound(event.key); // if the key has been pressed, the correct spound is played

  buttonAnimation(event.key); // if the key has been pressed, the button gets "animated"

});

// function for playing the corresponsing sound for each drum button
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

//function to "animate" the drum buttons - fades the image in and out by adding the CSS "pressed" class and removing after 100 milliseconds
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
