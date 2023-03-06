let randomImage = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  ];

function rollDice() {
    let randomNumber = Math.floor(Math.random() * randomImage.length);
    return randomImage[randomNumber];
  }


let player1 = rollDice();
let player2 = rollDice();

  document.querySelector(".img1").setAttribute("src", player1);
  document.querySelector(".img2").setAttribute("src", player2);

if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else if (player1 === player2) {
    document.querySelector("h1").innerHTML = "It's a Draw.";
}

  
 
