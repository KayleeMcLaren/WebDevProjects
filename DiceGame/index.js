function checkRefresh() {
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")
 
  } else(
    rollTheDice()
  )
}
 
function rollTheDice() {
  
  //Player 1 dice
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //gets a random number between 1-6
  var randomImageSource =  "dice" + randomNumber1 + ".png"; //gets the file path for the correct dice image
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //chanegs the dice image (game starts with dice6.png)

  //Player 2 dice
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  // Else if player 2 wins
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  //Else it's a draw
  else {
    document.querySelector("h1").innerHTML = "Draw! 🤝";
  }
}
document.querySelector("body").onload = checkRefresh();  
