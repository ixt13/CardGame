import './style.css'
import { pad } from './helpers'
import {
    gameTableTemplate,
    gameStartTemplate,
    modalWinTemplate,
    modalLooseTemplate,
} from './templates'
import { templateEngine } from './templateEngine'

let cardDeck: TypeCards[] = [
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
type TypeCards = {
    color: string
    rank: string
    img: string
}
let finalCardDeck: TypeCards[] = []
let n = 0
let i = 0
let attemptsCount: number = 0
let clickable = false
let noIdenticalCardsCount = 0
let timerValueSeconds: string = ''
let timerValueMinutes: string = ''
let timerCheckpoint = 0

export class cardGame {
    container: Element
    constructor(container: Element) {
        this.container = container
        container.appendChild(templateEngine(this.gameLvlSelect()))
    }

    gameLvlSelect() {
        this.container.replaceChildren()
        container?.appendChild(templateEngine(gameStartTemplate()))
        timerValueSeconds = ''
        timerValueMinutes = ''
        noIdenticalCardsCount = 0
        i = 0
        n = 0
        attemptsCount = 0
        clickable = false
        finalCardDeck = []
        timerCheckpoint = 0
        let lvlSelector: string = ''
        let ss = 0
        const activeSelector: NodeListOf<HTMLDivElement> =
            document.querySelectorAll('.section_selector')
        activeSelector.forEach((selector: HTMLDivElement) => {
            selector.addEventListener('click', () => {
                for (let i = 0; i < activeSelector.length; i++) {
                    const element = activeSelector[i]
                    if (element.classList.contains('selectorActiveBorder')) {
                        element.classList.remove('selectorActiveBorder')
                    }
                }
                selector.classList.add('selectorActiveBorder')
                lvlSelector = selector.textContent!
            })
        })

        const startButton = document.querySelector('.sectionButton')
        startButton?.addEventListener('click', (event) => {
            switch (lvlSelector) {
                case '1':
                    this.easyLvl()
                    break

                case '2':
                    this.normalLvl()
                    break

                case '3':
                    this.hardLvl()
                    break
            }
        })
    }

    easyLvl() {
        this.container.replaceChildren()
        attemptsCount = 5

        container?.appendChild(templateEngine(gameTableTemplate()))
        const game = document.querySelector('.game_table')
        const attemptsCountValue: HTMLDivElement =
            document.querySelector('.attemptsCount')!
        attemptsCountValue.textContent = attemptsCount.toString()
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
            game?.appendChild(card)
            card.style.height = '100px'
        }

        const cardItems: NodeListOf<HTMLImageElement> =
            document.querySelectorAll('.card')
        let firstCard: string = 'null'
        let secondCard: string = 'null'
        let firstCardIndex = parseInt(firstCard)
        let secondCardIndex = parseInt(secondCard)
        cardItems.forEach((card: HTMLImageElement, index: number) => {
            card.setAttribute('src', finalCardDeck[index].img)
            const hideCardsTimer = setTimeout(() => {
                cardItems.forEach((card: HTMLImageElement) => {
                    card.setAttribute('src', './static/рубашка.svg')

                    this.gameTimer()
                    clickable = true
                })
            }, 5000)
            const mainMenuButton = document.querySelector(
                '.game_topContent-button'
            )
            mainMenuButton?.addEventListener('click', (event) => {
                this.gameLvlSelect()
                clearTimeout(hideCardsTimer)
            })
        })

        cardItems.forEach((card: HTMLImageElement, index: number) =>
            card.addEventListener('click', () => {
                if (
                    clickable === true &&
                    !card.classList.contains('identical')
                ) {
                    card.setAttribute('src', finalCardDeck[index].img)
                    if (firstCard === 'null') {
                        firstCardIndex = index
                        firstCard = firstCardIndex.toString()
                    } else if (index != firstCardIndex) {
                        secondCardIndex = index
                        secondCard = secondCardIndex.toString()
                        clickable = false
                    }

                    if (
                        firstCard !== 'null' &&
                        secondCard !== 'null' &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardItems[firstCardIndex].src ===
                            cardItems[secondCardIndex].src
                        ) {
                            cardItems[firstCardIndex].classList.add('identical')
                            cardItems[secondCardIndex].classList.add(
                                'identical'
                            )
                            firstCard = 'null'
                            secondCard = 'null'
                            clickable = true
                        } else if (
                            cardItems[firstCardIndex].src !==
                            cardItems[secondCardIndex].src
                        ) {
                            setTimeout(() => {
                                cardItems[firstCardIndex].src =
                                    './static/рубашка.svg'
                                cardItems[secondCardIndex].src =
                                    './static/рубашка.svg'
                                firstCard = 'null'
                                secondCard = 'null'
                                clickable = true
                                noIdenticalCardsCount++
                                attemptsCount--
                                const attemptsCountContent =
                                    document.querySelector('.attemptsCount')
                                attemptsCountContent!.textContent =
                                    attemptsCount.toString()
                                if (noIdenticalCardsCount === 5) {
                                    timerCheckpoint = 1
                                    i = 0
                                    n = 1
                                    clickable = false
                                }
                            }, 500)
                        }
                    }
                    if (
                        Array.from(cardItems).every((card: HTMLImageElement) =>
                            card.className.includes('identical')
                        )
                    ) {
                        timerCheckpoint = 1
                        i = 1
                        clickable = false
                    }
                }
            })
        )
    }

    normalLvl() {
        this.container.replaceChildren()
        attemptsCount = 10

        container?.appendChild(templateEngine(gameTableTemplate()))
        const game = document.querySelector('.game_table')
        const attemptsCountValue: HTMLDivElement =
            document.querySelector('.attemptsCount')!
        attemptsCountValue.textContent = attemptsCount.toString()
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
            game?.appendChild(card)
            card.style.height = '100px'
        }

        const cardItems: NodeListOf<HTMLImageElement> =
            document.querySelectorAll('.card')
        let firstCard: string = 'null'
        let secondCard: string = 'null'
        let firstCardIndex = parseInt(firstCard)
        let secondCardIndex = parseInt(secondCard)
        cardItems.forEach((card: HTMLImageElement, index: number) => {
            card.setAttribute('src', finalCardDeck[index].img)
            const hideCardsTimer = setTimeout(() => {
                cardItems.forEach((card: HTMLImageElement) => {
                    card.setAttribute('src', './static/рубашка.svg')

                    this.gameTimer()
                    clickable = true
                })
            }, 5000)
            const mainMenuButton = document.querySelector(
                '.game_topContent-button'
            )
            mainMenuButton?.addEventListener('click', (event) => {
                this.gameLvlSelect()
                clearTimeout(hideCardsTimer)
            })
        })

        cardItems.forEach((card: HTMLImageElement, index: number) =>
            card.addEventListener('click', () => {
                if (
                    clickable === true &&
                    !card.classList.contains('identical')
                ) {
                    card.setAttribute('src', finalCardDeck[index].img)
                    if (firstCard === 'null') {
                        firstCardIndex = index
                        firstCard = firstCardIndex.toString()
                    } else if (index != firstCardIndex) {
                        secondCardIndex = index
                        secondCard = secondCardIndex.toString()
                        clickable = false
                    }

                    if (
                        firstCard !== 'null' &&
                        secondCard !== 'null' &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardItems[firstCardIndex].src ===
                            cardItems[secondCardIndex].src
                        ) {
                            cardItems[firstCardIndex].classList.add('identical')
                            cardItems[secondCardIndex].classList.add(
                                'identical'
                            )
                            firstCard = 'null'
                            secondCard = 'null'
                            clickable = true
                        } else if (
                            cardItems[firstCardIndex].src !==
                            cardItems[secondCardIndex].src
                        ) {
                            setTimeout(() => {
                                cardItems[firstCardIndex].src =
                                    './static/рубашка.svg'
                                cardItems[secondCardIndex].src =
                                    './static/рубашка.svg'
                                firstCard = 'null'
                                secondCard = 'null'
                                clickable = true
                                noIdenticalCardsCount++
                                attemptsCount--
                                const attemptsCountContent =
                                    document.querySelector('.attemptsCount')
                                attemptsCountContent!.textContent =
                                    attemptsCount.toString()
                                if (noIdenticalCardsCount === 10) {
                                    timerCheckpoint = 1
                                    i = 0
                                    n = 1
                                    clickable = false
                                }
                            }, 500)
                        }
                    }
                    if (
                        Array.from(cardItems).every((card: HTMLImageElement) =>
                            card.className.includes('identical')
                        )
                    ) {
                        timerCheckpoint = 1
                        i = 1
                        clickable = false
                    }
                }
            })
        )
    }

    hardLvl() {
        this.container.replaceChildren()
        attemptsCount = 20

        container?.appendChild(templateEngine(gameTableTemplate()))
        const game = document.querySelector('.game_table')
        const attemptsCountValue: HTMLDivElement =
            document.querySelector('.attemptsCount')!
        attemptsCountValue.textContent = attemptsCount.toString()
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
            game?.appendChild(card)
            card.style.height = '100px'
        }

        const cardItems: NodeListOf<HTMLImageElement> =
            document.querySelectorAll('.card')
        let firstCard: string = 'null'
        let secondCard: string = 'null'
        let firstCardIndex = parseInt(firstCard)
        let secondCardIndex = parseInt(secondCard)
        cardItems.forEach((card: HTMLImageElement, index: number) => {
            card.setAttribute('src', finalCardDeck[index].img)
            const hideCardsTimer = setTimeout(() => {
                cardItems.forEach((card: HTMLImageElement) => {
                    card.setAttribute('src', './static/рубашка.svg')

                    this.gameTimer()
                    clickable = true
                })
            }, 5000)
            const mainMenuButton = document.querySelector(
                '.game_topContent-button'
            )
            mainMenuButton?.addEventListener('click', (event) => {
                this.gameLvlSelect()
                clearTimeout(hideCardsTimer)
            })
        })

        cardItems.forEach((card: HTMLImageElement, index: number) =>
            card.addEventListener('click', () => {
                if (
                    clickable === true &&
                    !card.classList.contains('identical')
                ) {
                    card.setAttribute('src', finalCardDeck[index].img)
                    if (firstCard === 'null') {
                        firstCardIndex = index
                        firstCard = firstCardIndex.toString()
                    } else if (index != firstCardIndex) {
                        secondCardIndex = index
                        secondCard = secondCardIndex.toString()
                        clickable = false
                    }

                    if (
                        firstCard !== 'null' &&
                        secondCard !== 'null' &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardItems[firstCardIndex].src ===
                            cardItems[secondCardIndex].src
                        ) {
                            cardItems[firstCardIndex].classList.add('identical')
                            cardItems[secondCardIndex].classList.add(
                                'identical'
                            )
                            firstCard = 'null'
                            secondCard = 'null'
                            clickable = true
                        } else if (
                            cardItems[firstCardIndex].src !==
                            cardItems[secondCardIndex].src
                        ) {
                            setTimeout(() => {
                                cardItems[firstCardIndex].src =
                                    './static/рубашка.svg'
                                cardItems[secondCardIndex].src =
                                    './static/рубашка.svg'
                                firstCard = 'null'
                                secondCard = 'null'
                                clickable = true
                                noIdenticalCardsCount++
                                attemptsCount--
                                const attemptsCountContent =
                                    document.querySelector('.attemptsCount')
                                attemptsCountContent!.textContent =
                                    attemptsCount.toString()
                                if (noIdenticalCardsCount === 20) {
                                    timerCheckpoint = 1
                                    i = 0
                                    n = 1
                                    clickable = false
                                }
                            }, 500)
                        }
                    }
                    if (
                        Array.from(cardItems).every((card: HTMLImageElement) =>
                            card.className.includes('identical')
                        )
                    ) {
                        timerCheckpoint = 1
                        i = 1
                        clickable = false
                    }
                }
            })
        )
    }

    gameTimer() {
        const minutesLabel = document.querySelector('.minutes')!
        const secondsLabel = document.querySelector('.seconds')!

        let totalSeconds: number = 0
        let gameTimer: NodeJS.Timer = setInterval(() => {
            if (timerCheckpoint === 1) {
                clearInterval(gameTimer)
                gameTimer === null

                while (i === 1) {
                    container?.appendChild(templateEngine(modalWinTemplate()))
                    const timerMinutes =
                        document.querySelector('.timerValueMinutes')!
                    const timerSeconds =
                        document.querySelector('.timerValueSeconds')!
                    timerMinutes.textContent = timerValueMinutes
                    timerSeconds.textContent = timerValueSeconds
                    const modalAttempsValue =
                        document.querySelector('.modalAttemps')!
                    modalAttempsValue.textContent = attemptsCount.toString()
                    const mainMenuButton =
                        document.querySelector('.modal-button')
                    mainMenuButton?.addEventListener('click', (event) => {
                        this.gameLvlSelect()
                    })
                    i++
                    break
                }
                while (n === 1) {
                    container?.appendChild(templateEngine(modalLooseTemplate()))
                    const timerMinutesLoose =
                        document.querySelector('.timerValueMinutes')!
                    const timerSecondsLoose =
                        document.querySelector('.timerValueSeconds')!
                    timerMinutesLoose.textContent = timerValueMinutes
                    timerSecondsLoose.textContent = timerValueSeconds
                    const modalAttempsValueLoose =
                        document.querySelector('.modalAttemps')!
                    modalAttempsValueLoose.textContent =
                        attemptsCount.toString()
                    const mainMenuButton =
                        document.querySelector('.modal-button')
                    mainMenuButton?.addEventListener('click', (event) => {
                        this.gameLvlSelect()
                    })
                    n++
                    break
                }
            } else {
                setTime()
            }
        }, 1000)

        function setTime() {
            ++totalSeconds
            secondsLabel!.textContent = pad(totalSeconds % 60)
            let minutes = totalSeconds / 60

            minutesLabel!.textContent = pad(parseInt(minutes.toString()))

            timerValueSeconds = secondsLabel.textContent
            timerValueMinutes = minutesLabel.textContent
        }
    }
}

const container = document.querySelector('.container')
const widget = new cardGame(container!)
