const firstCard = 5;
const secondCard = 10;
const sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""

startGame = () => {
   console.log("Game started")
    }

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
} else {
    message = "You're out of the game! 😭";
    isAlive = false;
}

console.log(message);