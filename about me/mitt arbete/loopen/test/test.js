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

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    renderGame()
}
function renderGame() {
        sumEl.textContent = "Sum: " + sum;
        cardsEl.textContent = "Cards: "
        for (let i = 0; i < cards.length; i++)(
            cardsEl.textContent += cards[i] + " "
        )
        if (sum < 21) {
            message = ("do you want to hit or stay?")
        } else if (sum === 21) {
            message = ("and thats black jack")
            hasblackjack = true
        } else {
            message = ("and thats a bust")
            isAlive = false
        }
messageEl.textContent = message;
}
function newcard () {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

