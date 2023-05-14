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
let finalCardDeck: any = []
let n = 0
let i = 0
let attemptsCount: any = 0
let clickable = true
let noIdenticalCardsCount = 0
let timerValueSeconds = ''
let timerValueMinutes = ''
let timerCheckpoint = 0

class cardGame {
    container: any
    constructor(container: any) {
        this.container = container
        container.appendChild(templateEngine(this.gameLvlSelect()))
    }

    gameLvlSelect() {
        this.container.replaceChildren()
        container?.appendChild(templateEngine(this.gameStartTemplate()))
        const firstLvlSelector = document.querySelector('.firstSelector')
        const secondLvlSelector = document.querySelector('.secondSelector')
        const thirdLvlSelector = document.querySelector('.thirdSelector')
        timerValueSeconds = ''
        timerValueMinutes = ''
        noIdenticalCardsCount = 0
        i = 0
        n = 0
        attemptsCount = 0
        clickable = true
        finalCardDeck = []
        timerCheckpoint = 0
        let lvlSelector = ''
        let ss = 0
        const activeSelector = document.querySelectorAll('.section_selector')
        activeSelector.forEach((selector: any, index: any) => {
            selector.addEventListener('click', (event: any) => {
                for (let i = 0; i < activeSelector.length; i++) {
                    const element = activeSelector[i]
                    if (element.classList.contains('selectorActiveBorder')) {
                        element.classList.remove('selectorActiveBorder')
                    }
                }
                selector.classList.add('selectorActiveBorder')
                lvlSelector = selector.textContent
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

        container?.appendChild(templateEngine(this.gameTableTemplate()))
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
            game?.appendChild(card)
            card.style.height = '100px'
        }

        const cardItems: any = document.querySelectorAll('.card')
        let firstCard: any = 'null'
        let secondCard: any = 'null'
        cardItems.forEach((card: any, index: number) => {
            card.setAttribute('src', finalCardDeck[index].img)
            const hideCardsTimer = setTimeout(() => {
                cardItems.forEach((card: any) => {
                    card.setAttribute('src', './static/рубашка.svg')

                    this.gameTimer()
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

        cardItems.forEach((card: any, index: any) =>
            card.addEventListener('click', () => {
                if (
                    clickable === true &&
                    !card.classList.contains('identical')
                ) {
                    card.setAttribute('src', finalCardDeck[index].img)
                    card.setAttribute('src', finalCardDeck[index].img)
                    if (firstCard === 'null') {
                        firstCard = index
                    } else if (index != firstCard) {
                        secondCard = index
                        clickable = false
                    }

                    if (
                        firstCard !== 'null' &&
                        secondCard !== 'null' &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardItems[firstCard].src ===
                            cardItems[secondCard].src
                        ) {
                            cardItems[firstCard].classList.add('identical')
                            cardItems[secondCard].classList.add('identical')
                            firstCard = 'null'
                            secondCard = 'null'
                            clickable = true
                        } else if (
                            cardItems[firstCard].src !==
                            cardItems[secondCard].src
                        ) {
                            setTimeout(() => {
                                cardItems[firstCard].src =
                                    './static/рубашка.svg'
                                cardItems[secondCard].src =
                                    './static/рубашка.svg'
                                firstCard = 'null'
                                secondCard = 'null'
                                clickable = true
                                noIdenticalCardsCount++
                                attemptsCount--
                                const attemptsCountContent =
                                    document.querySelector('.attemptsCount')
                                attemptsCountContent!.textContent =
                                    attemptsCount
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
                        Array.from(cardItems).every((card: any) =>
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

        container?.appendChild(templateEngine(this.gameTableTemplate()))
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
            game?.appendChild(card)
            card.style.height = '100px'
        }

        const cardItems: any = document.querySelectorAll('.card')
        let firstCard: any = 'null'
        let secondCard: any = 'null'
        cardItems.forEach((card: any, index: number) => {
            card.setAttribute('src', finalCardDeck[index].img)
            const hideCardsTimer = setTimeout(() => {
                cardItems.forEach((card: any) => {
                    card.setAttribute('src', './static/рубашка.svg')

                    this.gameTimer()
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

        cardItems.forEach((card: any, index: any) =>
            card.addEventListener('click', () => {
                if (
                    clickable === true &&
                    !card.classList.contains('identical')
                ) {
                    card.setAttribute('src', finalCardDeck[index].img)
                    card.setAttribute('src', finalCardDeck[index].img)
                    if (firstCard === 'null') {
                        firstCard = index
                    } else if (index != firstCard) {
                        secondCard = index
                        clickable = false
                    }

                    if (
                        firstCard !== 'null' &&
                        secondCard !== 'null' &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardItems[firstCard].src ===
                            cardItems[secondCard].src
                        ) {
                            cardItems[firstCard].classList.add('identical')
                            cardItems[secondCard].classList.add('identical')
                            firstCard = 'null'
                            secondCard = 'null'
                            clickable = true
                        } else if (
                            cardItems[firstCard].src !==
                            cardItems[secondCard].src
                        ) {
                            setTimeout(() => {
                                cardItems[firstCard].src =
                                    './static/рубашка.svg'
                                cardItems[secondCard].src =
                                    './static/рубашка.svg'
                                firstCard = 'null'
                                secondCard = 'null'
                                clickable = true
                                noIdenticalCardsCount++
                                attemptsCount--
                                const attemptsCountContent =
                                    document.querySelector('.attemptsCount')
                                attemptsCountContent!.textContent =
                                    attemptsCount
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
                        Array.from(cardItems).every((card: any) =>
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

        container?.appendChild(templateEngine(this.gameTableTemplate()))
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
            game?.appendChild(card)
            card.style.height = '100px'
        }

        const cardItems: any = document.querySelectorAll('.card')
        let firstCard: any = 'null'
        let secondCard: any = 'null'
        cardItems.forEach((card: any, index: number) => {
            card.setAttribute('src', finalCardDeck[index].img)
            const hideCardsTimer = setTimeout(() => {
                cardItems.forEach((card: any) => {
                    card.setAttribute('src', './static/рубашка.svg')

                    this.gameTimer()
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

        cardItems.forEach((card: any, index: any) =>
            card.addEventListener('click', () => {
                if (
                    clickable === true &&
                    !card.classList.contains('identical')
                ) {
                    card.setAttribute('src', finalCardDeck[index].img)
                    card.setAttribute('src', finalCardDeck[index].img)
                    if (firstCard === 'null') {
                        firstCard = index
                    } else if (index != firstCard) {
                        secondCard = index
                        clickable = false
                    }

                    if (
                        firstCard !== 'null' &&
                        secondCard !== 'null' &&
                        firstCard !== secondCard
                    ) {
                        if (
                            cardItems[firstCard].src ===
                            cardItems[secondCard].src
                        ) {
                            cardItems[firstCard].classList.add('identical')
                            cardItems[secondCard].classList.add('identical')
                            firstCard = 'null'
                            secondCard = 'null'
                            clickable = true
                        } else if (
                            cardItems[firstCard].src !==
                            cardItems[secondCard].src
                        ) {
                            setTimeout(() => {
                                cardItems[firstCard].src =
                                    './static/рубашка.svg'
                                cardItems[secondCard].src =
                                    './static/рубашка.svg'
                                firstCard = 'null'
                                secondCard = 'null'
                                clickable = true
                                noIdenticalCardsCount++
                                attemptsCount--
                                const attemptsCountContent =
                                    document.querySelector('.attemptsCount')
                                attemptsCountContent!.textContent =
                                    attemptsCount
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
                        Array.from(cardItems).every((card: any) =>
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

    gameTableTemplate() {
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
                            content: [
                                { tag: 'div', cls: 'minutes', content: '00' },
                                { tag: 'p', cls: 'dots', content: ':' },
                                { tag: 'div', cls: 'seconds', content: '00' },
                            ],
                        },
                        {
                            tag: 'div',
                            cls: 'game_topContent-timer',
                            content: [
                                {
                                    tag: 'p',
                                    cls: 'attemptsText',
                                    content: 'Осталось попыток:',
                                },
                                {
                                    tag: 'p',
                                    cls: 'attemptsCount',
                                    content: attemptsCount,
                                },
                            ],
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

    gameStartTemplate() {
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
    modalWinTemplate() {
        return {
            tag: 'div',
            cls: 'modalWrapper',
            content: {
                tag: 'div',
                cls: 'modal',
                content: [
                    {
                        tag: 'div',
                        cls: 'winModalContent',
                        content: [
                            {
                                tag: 'img',
                                cls: 'winImg',
                                attrs: {
                                    src: './static/celebration.svg',
                                    height: '96px',
                                },
                            },
                            {
                                tag: 'p',
                                cls: 'modalText',
                                content: 'Вы выиграли!',
                            },
                            {
                                tag: 'p',
                                cls: 'secondModalText',
                                content: 'Затраченное время:',
                            },
                            {
                                tag: 'p',
                                cls: 'modalTimer',
                                content: [
                                    timerValueMinutes,
                                    { tag: 'p', cls: 'dots', content: ':' },
                                    timerValueSeconds,
                                ],
                            },
                            {
                                tag: 'button',
                                cls: 'modal-button',
                                content: 'Играть снова',
                            },
                        ],
                    },
                ],
            },
        }
    }
    modalLoooseTempalte() {
        return {
            tag: 'div',
            cls: 'modalWrapper',
            content: {
                tag: 'div',
                cls: 'modal',
                content: [
                    {
                        tag: 'div',
                        cls: 'winModalContent',
                        content: [
                            {
                                tag: 'img',
                                cls: 'winImg',
                                attrs: {
                                    src: './static/dead.svg',
                                    height: '96px',
                                },
                            },
                            {
                                tag: 'p',
                                cls: 'modalText',
                                content: 'Вы проиграли!',
                            },
                            {
                                tag: 'p',
                                cls: 'secondModalText',
                                content: 'Затраченное время:',
                            },
                            {
                                tag: 'p',
                                cls: 'modalTimer',
                                content: [
                                    timerValueMinutes,
                                    { tag: 'p', cls: 'dots', content: ':' },
                                    timerValueSeconds,
                                ],
                            },
                            {
                                tag: 'button',
                                cls: 'modal-button',
                                content: 'Играть снова',
                            },
                        ],
                    },
                ],
            },
        }
    }
    gameTimer() {
        const minutesLabel: any = document.querySelector('.minutes')
        const secondsLabel: any = document.querySelector('.seconds')

        let totalSeconds: any = 0
        let gameTimer: any

        gameTimer = setInterval(() => {
            if (timerCheckpoint === 1) {
                gameTimer = clearInterval(gameTimer)
                gameTimer === null

                while (i === 1) {
                    container?.appendChild(
                        templateEngine(this.modalWinTemplate())
                    )
                    const mainMenuButton =
                        document.querySelector('.modal-button')
                    mainMenuButton?.addEventListener('click', (event) => {
                        this.gameLvlSelect()
                    })
                    i++
                    break
                }
                while (n === 1) {
                    container?.appendChild(
                        templateEngine(this.modalLoooseTempalte())
                    )
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
            timerValueSeconds = secondsLabel.textContent
            timerValueMinutes = minutesLabel.textContent

            ++totalSeconds
            secondsLabel.textContent = pad(totalSeconds % 60)
            //@ts-ignore
            minutesLabel.textContent = pad(parseInt(totalSeconds / 60))
        }

        function pad(val: any) {
            let valString = val + ''
            if (valString.length < 2) {
                return '0' + valString
            } else {
                return valString
            }
        }
    }
}

const container = document.querySelector('.container')
const widget = new cardGame(container)
//sadddddddddddddddddddddddddddddddddddddddddddddddddd
function templateEngine(block: any) {
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
