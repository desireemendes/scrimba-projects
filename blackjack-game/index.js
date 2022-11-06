let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getrandomCard () {
    return Math.floor(Math.random() * 21);
}


renderGame = () => {

    // cardsEl.textContent = `Cards: ${cards[0]}, ${cards[1]}`
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = `Sum: ${sum}`
    // console.log(cardsEl);

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
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}