
// these are our 12 img cards, starting from zero
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }
]

// sort the card array randomly
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

// create element for each array, add click event listener and display elements
function createBoard() {
    for (let index = 0; index < cardArray.length ; index++) {
        
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', index)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

        
    }
} 
createBoard()

// flip card when clicked, shows card id & name, 
function flipCard(){
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    console.log('clicked', cardId)

}

// flipCard()
