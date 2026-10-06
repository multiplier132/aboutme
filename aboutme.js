//let blackjack

let newcardBtn = document.getElementById("new-card-btn")
let startGameBtn = document.getElementById("start-game-btn")
let firstcard = getRandomCard()
let secondcard = getRandomCard()
let cards = [firstcard, secondcard]
let sum = firstcard + secondcard
let hasblackjack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

//let counter 

let minusEL = document.querySelector("#minus-btn")
let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEL.innerText = count
    console.log(count)
}

function save() {
    let countStr = count + " - " 
    saveEl.textContent += countStr
    count = 0
}

function minus() {
    count -= 1
    countEL.innerText = count
    console.log(count)
}

let welcomeEl = document.getElementById("welcome-el")
let name = "Miran"
let greeting = "Welcome back, "


//black jack

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

startGameBtn.addEventListener("click", startGame)

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message = "do you want to hit or stay?"
    } else if (sum === 21) {
        message = "and thats black jack"
        hasblackjack = true
    } else {
        message = "and thats a bust"
        isAlive = false
    }
    messageEl.textContent = message;
}

newcardBtn.addEventListener("click", newcard)
function newcard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

//secret button
let secretBtn = document.getElementById("secret-btn");
secretBtn.addEventListener("click", function() {
    let audio = new Audio("cheeseburgers.mp3");
    audio.play();
    console.log("secret button clicked");
});