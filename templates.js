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

function showCardsTemplate() {
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
            {
                tag: 'div',
                cls: 'game_mainContent-cards',
                content: [
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/туз пики.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/король пики.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/дама пики.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/валет пики.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/10 пики.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/9 пики.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/8 пики.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/7 пики.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/6 пики.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/туз черви.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/король черви.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/дама черви.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/валет черви.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/10 черви.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/9 черви.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/8 черви.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/7 черви.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/6 черви.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/туз бубны.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/король бубны.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/дама бубны.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/валет бубны.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/10 бубны.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/9 бубны.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/8 бубны.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/7 бубны.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/6 бубны.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/туз крести.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/король крести.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/дама крести.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/валет крести.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/10 крести.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/9 крести.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/8 крести.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/7 крести.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/6 крести.svg',
                            width: '95px',
                        },
                    },
                ],
            },
        ],
    }
}

function hiddenCardsTemplate() {
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
            {
                tag: 'div',
                cls: 'game_mainContent-cards',
                content: [
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                    {
                        tag: 'img',
                        cls: 'game_mainContent-image',
                        attrs: {
                            src: './data/cards/рубашка.svg',
                            width: '95px',
                        },
                    },
                ],
            },
        ],
    }
}
