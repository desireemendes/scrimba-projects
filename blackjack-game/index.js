const firstCard = 5;
const secondCard = 10;
const sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

startGame = () => {

    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
    console.log(cardsEl);

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
} else {
    message = "You're out of the game! 😭";
    isAlive = false;
}
messageEl.textContent = message;
}

newCard = () => {
    console.log("New card drawn");
}