const firstCard = 5;
const secondCard = 10;
const sum = firstCard + secondCard;


if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳");
} else {
    console.log("You're out of the game! 😭");
}