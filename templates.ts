export function gameTableTemplate() {
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

export function gameStartTemplate() {
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
export function modalWinTemplate() {
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
                                { tag: 'div', cls: 'timerValueMinutes' },
                                { tag: 'p', cls: 'dots', content: ':' },
                                { tag: 'div', cls: 'timerValueSeconds' },
                            ],
                        },
                        {
                            tag: 'p',
                            cls: 'secondModalText',
                            content: 'Осталось попыток:',
                        },
                        {
                            tag: 'p',
                            cls: ['modalTimer', 'modalAttemps'],
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
export function modalLooseTemplate() {
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
                                { tag: 'div', cls: 'timerValueMinutes' },
                                { tag: 'p', cls: 'dots', content: ':' },
                                { tag: 'div', cls: 'timerValueSeconds' },
                            ],
                        },
                        {
                            tag: 'p',
                            cls: 'secondModalText',
                            content: 'Осталось попыток:',
                        },
                        {
                            tag: 'p',
                            cls: ['modalTimer', 'modalAttemps'],
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
