class cardGame{
    constructor(container){
        this.container = container;
        this.gameLvlSelect();
    }

    gameLvlSelect(){
        this.container.replaceChildren();
        container.appendChild(templateEngine(gameStartTemplate()));
        const firstLvlSelector = document.querySelector('.firstSelector');
        const secondLvlSelector = document.querySelector('.secondSelector');
        const thirdLvlSelector = document.querySelector('.thirdSelector');
        
            firstLvlSelector.addEventListener('click', (event)=>{
                this.firstLvl();
            });
        
            secondLvlSelector.addEventListener('click', (event)=>{
               this.secondLvl();
            });
        
            thirdLvlSelector.addEventListener('click', (event)=>{
                this.thirdLvl();
            });
    }



    firstLvl(){
        this.container.replaceChildren();
        console.log('firstLvl');
    }

    secondLvl(){
        this.container.replaceChildren();
        console.log('secondLvl');
    }

    thirdLvl(){
        this.container.replaceChildren();
        console.log('thirdLvl');
    }

}
    
    
   

