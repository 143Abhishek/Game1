const cardArray = [
    {
        name: 'Krishna1',
        img:'./photos/Krishna1.jpg'
    },
    {
        name: 'Krishna2',
        img:'./photos/Krishna2.jpg'
    },
    {
        name: 'Krishna3',
        img:'./photos/Krishna3.jpg'
    },
    {
        name: 'Krishna4',
        img:'./photos/Krishna4.jpg'
    },
    {
        name: 'Krishna5',
        img:'./photos/Krishna5.jpg'
    },
    {
        name: 'Krishna6',
        img:'./photos/Krishna6.jpg'
    },
    {
        name: 'Krishna1',
        img:'./photos/Krishna1.jpg'
    },
    {
        name: 'Krishna2',
        img:'./photos/Krishna2.jpg'
    },
    {
        name: 'Krishna3',
        img:'./photos/Krishna3.jpg'
    },
    {
        name: 'Krishna4',
        img:'./photos/Krishna4.jpg'
    },
    {
        name: 'Krishna5',
        img:'./photos/Krishna5.jpg'
    },
    {
        name: 'Krishna6',
        img:'./photos/Krishna6.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

let cardsChosen = []
let cardsChosenIds = []
let cardWon = []
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './photos/Krishna9.jpg');
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const resultDisplay = document.querySelector('#result')

    if (cardsChosenIds[0] == cardsChosenIds[1]) {
        cards[cardsChosenIds[0]].setAttribute('src', './photos/Krishna9.jpg');
        cards[cardsChosenIds[1]].setAttribute('src', './photos/Krishna9.jpg');
        alert('You have clicked the same image')
    }
    else{
    if (cardsChosen[0] == cardsChosen[1]) {
        cards[cardsChosenIds[0]].setAttribute('src', './photos/black.jpg');
        cards[cardsChosenIds[1]].setAttribute('src', './photos/black.jpg');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardWon.push(cardsChosen);
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', './photos/Krishna9.jpg');
        cards[cardsChosenIds[1]].setAttribute('src', './photos/Krishna9.jpg');
    }
    }
    resultDisplay.textContent = cardWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardWon.length == cardArray.length/2) {
        resultDisplay.textContent = "Congratulation You Won the Match";
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
    console.log(cardArray)
}