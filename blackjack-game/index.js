let firstCard = Math.floor(Math.random() * 21);
let secondCard = Math.floor(Math.random() * 21);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

renderGame = () => {

    cardsEl.textContent = `Cards: ${cards[0]}, ${cards[1]}`
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
    let card = 4;
    sum += card;
    cards.push(card);
    renderGame();
}