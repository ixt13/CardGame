function gameStartTemplate() {
    return {
        tag:'div', class:'game',content:[
            {tag:'div',cls:'section',content:[
                {tag:'div',cls:'section_content',content:[
                    {tag:'p',cls:'section-title',content:'Выбери  сложность'},
                    {tag:'div',cls:'section_selectors',content:[
                        {tag:'div',cls:['section_selector','firstSelector'],content:'1'},
                        {tag:'div',cls:['section_selector','secondSelector'],content:'2'},
                        {tag:'div',cls:['section_selector','thirdSelector'],content:'3'},
                    ]},
                {tag:'button',cls:'sectionButton',content:'Старт'},
                ]}
            
            ]}
        ]
    }
};










