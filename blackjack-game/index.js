let firstCard = 5;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

renderGame = () => {

    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
    sumEl.textContent = `Sum: ${sum}`
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

startGame = () => {
    renderGame()
}

newCard = () => {
    console.log("New card drawn");
    let card = 4;
    sum += card;
    renderGame();
}