let cardDeck = [
    { color: 'hearts', rank: 'A', img: './static/туз черви.svg' },
    { color: 'hearts', rank: 'K', img: './static/король черви.svg' },
    { color: 'hearts', rank: 'Q', img: './static/дама черви.svg' },
    { color: 'hearts', rank: 'J', img: './static/валет черви.svg' },
    { color: 'hearts', rank: '10', img: './static/10 черви.svg' },
    { color: 'hearts', rank: '9', img: './static/9 черви.svg' },
    { color: 'hearts', rank: '8', img: './static/8 черви.svg' },
    { color: 'hearts', rank: '7', img: './static/7 черви.svg' },
    { color: 'hearts', rank: '6', img: './static/6 черви.svg' },
    { color: 'spades', rank: 'A', img: './static/туз крести.svg' },
    { color: 'spades', rank: 'K', img: './static/король крести.svg' },
    { color: 'spades', rank: 'Q', img: './static/дама крести.svg' },
    { color: 'spades', rank: 'J', img: './static/валет крести.svg' },
    { color: 'spades', rank: '10', img: './static/10 крести.svg' },
    { color: 'spades', rank: '9', img: './static/9 крести.svg' },
    { color: 'spades', rank: '8', img: './static/8 крести.svg' },
    { color: 'spades', rank: '7', img: './static/7 крести.svg' },
    { color: 'spades', rank: '6', img: './static/6 крести.svg' },
    { color: 'clubs', rank: 'A', img: './static/туз пики.svg' },
    { color: 'clubs', rank: 'K', img: './static/король пики.svg' },
    { color: 'clubs', rank: 'Q', img: './static/дама пики.svg' },
    { color: 'clubs', rank: 'J', img: './static/валет пики.svg' },
    { color: 'clubs', rank: '10', img: './static/10 пики.svg' },
    { color: 'clubs', rank: '9', img: './static/9 пики.svg' },
    { color: 'clubs', rank: '8', img: './static/8 пики.svg' },
    { color: 'clubs', rank: '7', img: './static/7 пики.svg' },
    { color: 'clubs', rank: '6', img: './static/6 пики.svg' },
    { color: 'diamonds', rank: 'A', img: './static/туз бубны.svg' },
    { color: 'diamonds', rank: 'K', img: './static/король бубны.svg' },
    { color: 'diamonds', rank: 'Q', img: './static/дама бубны.svg' },
    { color: 'diamonds', rank: 'J', img: './static/валет бубны.svg' },
    { color: 'diamonds', rank: '10', img: './static/10 бубны.svg' },
    { color: 'diamonds', rank: '9', img: './static/9 бубны.svg' },
    { color: 'diamonds', rank: '8', img: './static/8 бубны.svg' },
    { color: 'diamonds', rank: '7', img: './static/7 бубны.svg' },
    { color: 'diamonds', rank: '6', img: './static/6 бубны.svg' },
]
let finalCardDeck = []

class cardGame {
    constructor(container) {
        this.container = container
        this.gameLvlSelect()
    }

    gameLvlSelect() {
        this.container.replaceChildren()
        container.appendChild(templateEngine(gameStartTemplate()))
        const firstLvlSelector = document.querySelector('.firstSelector')
        const secondLvlSelector = document.querySelector('.secondSelector')
        const thirdLvlSelector = document.querySelector('.thirdSelector')

        firstLvlSelector.addEventListener('click', (event) => {
            this.easyLvl()
        })

        secondLvlSelector.addEventListener('click', (event) => {
            this.normalLvl()
        })

        thirdLvlSelector.addEventListener('click', (event) => {
            this.hardLvl()
        })
    }

    easyLvl() {
        this.container.replaceChildren()
        container.appendChild(templateEngine(gameTableTemplate()))

        const game = document.querySelector('.game_table')

        cardDeck.sort(() => Math.random() - 0.5)

        for (let i = 0; i < 3; i++) {
            finalCardDeck.push(cardDeck[i])
            finalCardDeck.push(cardDeck[i])
        }
        finalCardDeck.sort(() => Math.random() - 0.5)

        for (let i = 0; i < finalCardDeck.length; i++) {
            const card = document.createElement('img')
            card.src = './static/рубашка.svg'
            card.classList.add('card')
            game.appendChild(card)
            card.style.height = '100px'
        }

        const cardItems = document.querySelectorAll('.card')
        let firstCard = null
        let secondCard = null
        let clickable = true
        cardItems.forEach((card, index) => {
            card.src = finalCardDeck[index].img

            setTimeout(() => {
                cardItems.forEach((card, index) => {
                    card.src = './static/рубашка.svg'
                })
            }, 5000)
        })
        cardItems.forEach((card, index) =>
            card.addEventListener('click', (event) => {
                if (
                    clickable === true &&
                    !card.classList.contains('identical')
                ) {
                    card.src = finalCardDeck[index].img
                    card.src = finalCardDeck[index].img
                    if (firstCard === null) {
                        firstCard = index
                    } else if (index != firstCard) {
                        secondCard = index
                        clickable = false
                    }

                    if (
                        firstCard !== null &&
                        secondCard !== null &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardItems[firstCard].src ===
                            cardItems[secondCard].src
                        ) {
                            cardItems[firstCard].classList.add('identical')
                            cardItems[secondCard].classList.add('identical')
                            firstCard = null
                            secondCard = null
                            clickable = true
                        } else if (
                            cardItems[firstCard].src !==
                            cardItems[secondCard].src
                        ) {
                            setTimeout(() => {
                                console.log(card.src)
                                cardItems[firstCard].src =
                                    './static/рубашка.svg'
                                cardItems[secondCard].src =
                                    './static/рубашка.svg'
                                firstCard = null
                                secondCard = null
                                clickable = true
                            }, 500)
                        }
                    }
                    if (
                        Array.from(cardItems).every((card) =>
                            card.className.includes('identical')
                        )
                    ) {
                        alert('Вы победили')
                    }
                }
            })
        )
    }

    normalLvl() {
        this.container.replaceChildren()
        container.appendChild(templateEngine(gameTableTemplate()))
        const game = document.querySelector('.game_table')

        cardDeck.sort(() => Math.random() - 0.5)

        for (let i = 0; i < 6; i++) {
            finalCardDeck.push(cardDeck[i])
            finalCardDeck.push(cardDeck[i])
        }
        finalCardDeck.sort(() => Math.random() - 0.5)

        for (let i = 0; i < finalCardDeck.length; i++) {
            const card = document.createElement('img')
            card.src = './static/рубашка.svg'
            card.classList.add('card')
            game.appendChild(card)
            card.style.height = '100px'
        }

        const cardItems = document.querySelectorAll('.card')
        let firstCard = null
        let secondCard = null
        let clickable = true
        cardItems.forEach((card, index) => {
            card.src = finalCardDeck[index].img

            setTimeout(() => {
                cardItems.forEach((card, index) => {
                    card.src = './static/рубашка.svg'
                })
            }, 5000)
        })
        cardItems.forEach((card, index) =>
            card.addEventListener('click', (event) => {
                if (
                    clickable === true &&
                    !card.classList.contains('identical')
                ) {
                    card.src = finalCardDeck[index].img
                    card.src = finalCardDeck[index].img
                    if (firstCard === null) {
                        firstCard = index
                    } else if (index != firstCard) {
                        secondCard = index
                        clickable = false
                    }

                    if (
                        firstCard !== null &&
                        secondCard !== null &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardItems[firstCard].src ===
                            cardItems[secondCard].src
                        ) {
                            cardItems[firstCard].classList.add('identical')
                            cardItems[secondCard].classList.add('identical')
                            firstCard = null
                            secondCard = null
                            clickable = true
                        } else if (
                            cardItems[firstCard].src !==
                            cardItems[secondCard].src
                        ) {
                            setTimeout(() => {
                                console.log(card.src)
                                cardItems[firstCard].src =
                                    './static/рубашка.svg'
                                cardItems[secondCard].src =
                                    './static/рубашка.svg'
                                firstCard = null
                                secondCard = null
                                clickable = true
                            }, 500)
                        }
                    }
                    if (
                        Array.from(cardItems).every((card) =>
                            card.className.includes('identical')
                        )
                    ) {
                        alert('Вы победили')
                    }
                }
            })
        )
    }

    hardLvl() {
        this.container.replaceChildren()
        container.appendChild(templateEngine(gameTableTemplate()))
        const game = document.querySelector('.game_table')

        cardDeck.sort(() => Math.random() - 0.5)

        for (let i = 0; i < 9; i++) {
            finalCardDeck.push(cardDeck[i])
            finalCardDeck.push(cardDeck[i])
        }
        finalCardDeck.sort(() => Math.random() - 0.5)

        for (let i = 0; i < finalCardDeck.length; i++) {
            const card = document.createElement('img')
            card.src = './static/рубашка.svg'
            card.classList.add('card')
            game.appendChild(card)
            card.style.height = '100px'
        }

        const cardItems = document.querySelectorAll('.card')
        let firstCard = null
        let secondCard = null
        let clickable = true
        cardItems.forEach((card, index) => {
            card.src = finalCardDeck[index].img

            setTimeout(() => {
                cardItems.forEach((card, index) => {
                    card.src = './static/рубашка.svg'
                })
            }, 5000)
        })
        cardItems.forEach((card, index) =>
            card.addEventListener('click', (event) => {
                if (
                    clickable === true &&
                    !card.classList.contains('identical')
                ) {
                    card.src = finalCardDeck[index].img
                    card.src = finalCardDeck[index].img
                    if (firstCard === null) {
                        firstCard = index
                    } else if (index != firstCard) {
                        secondCard = index
                        clickable = false
                    }

                    if (
                        firstCard !== null &&
                        secondCard !== null &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardItems[firstCard].src ===
                            cardItems[secondCard].src
                        ) {
                            cardItems[firstCard].classList.add('identical')
                            cardItems[secondCard].classList.add('identical')
                            firstCard = null
                            secondCard = null
                            clickable = true
                        } else if (
                            cardItems[firstCard].src !==
                            cardItems[secondCard].src
                        ) {
                            setTimeout(() => {
                                console.log(card.src)
                                cardItems[firstCard].src =
                                    './static/рубашка.svg'
                                cardItems[secondCard].src =
                                    './static/рубашка.svg'
                                firstCard = null
                                secondCard = null
                                clickable = true
                            }, 500)
                        }
                    }
                    if (
                        Array.from(cardItems).every((card) =>
                            card.className.includes('identical')
                        )
                    ) {
                        alert('Вы победили')
                    }
                }
            })
        )
    }
}
const container = document.querySelector('.container')
const widget = new cardGame(container)
//sadddddddddddddddddddddddddddddddddddddddddddddddddd
function templateEngine(block) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('')
    }
    if (
        typeof block === 'string' ||
        typeof block === 'number' ||
        block === true
    ) {
        return document.createTextNode(block)
    }
    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment()

        block.forEach((element) => {
            fragment.appendChild(templateEngine(element))
        })

        return fragment
    }

    const result = document.createElement(block.tag)

    if (block.cls) {
        const classes = [].concat(block.cls)
        classes.forEach((cls) => {
            result.classList.add(cls)
        })
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs)

        keys.forEach((key) => {
            result.setAttribute(key, block.attrs[key])
        })
    }

    result.appendChild(templateEngine(block.content))

    return result
}

function gameStartTemplate() {
    return {
        tag: 'div',
        class: 'game',
        content: [
            {
                tag: 'div',
                cls: 'section',
                content: [
                    {
                        tag: 'div',
                        cls: 'section_content',
                        content: [
                            {
                                tag: 'p',
                                cls: 'section-title',
                                content: 'Выбери  сложность',
                            },
                            {
                                tag: 'div',
                                cls: 'section_selectors',
                                content: [
                                    {
                                        tag: 'div',
                                        cls: [
                                            'section_selector',
                                            'firstSelector',
                                        ],
                                        content: '1',
                                    },
                                    {
                                        tag: 'div',
                                        cls: [
                                            'section_selector',
                                            'secondSelector',
                                        ],
                                        content: '2',
                                    },
                                    {
                                        tag: 'div',
                                        cls: [
                                            'section_selector',
                                            'thirdSelector',
                                        ],
                                        content: '3',
                                    },
                                ],
                            },
                            {
                                tag: 'button',
                                cls: 'sectionButton',
                                content: 'Старт',
                            },
                        ],
                    },
                ],
            },
        ],
    }
}

function gameTableTemplate() {
    return {
        tag: 'game',
        cls: 'game',
        content: [
            {
                tag: 'div',
                cls: 'game_topContent',
                content: [
                    {
                        tag: 'div',
                        cls: 'game_topContent-timer',
                        content: 'timer',
                    },
                    {
                        tag: 'button',
                        cls: 'game_topContent-button',
                        content: 'Начать заново',
                    },
                ],
            },
            { tag: 'div', cls: 'game_table' },
        ],
    }
}
