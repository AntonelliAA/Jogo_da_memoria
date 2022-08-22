const game = document.querySelector('.game');

//name all cards

const allCards = [

    'archer',
    'assassin',
    'cOryx',
    'knight',
    'mystic',
    'ninja',
    'oryx',
    'paladin',
    'priest',
    'rogue',
    'samurai',
    'sorcerer',
    'summoner',
    'warrior',
    'wizard',
    'archer',
    'assassin',
    'cOryx',
    'knight',
    'mystic',
    'ninja',
    'oryx',
    'paladin',
    'priest',
    'rogue',
    'samurai',
    'sorcerer',
    'summoner',
    'warrior',
    'wizard',

];


let firstTarget = '';
let secondTarget = '';
let rightAnswers = 0;

const end = () => {

    if (rightAnswers === 15) {
        alert("Você ganhou!");
    }
}

const check = () => {

    const first = firstTarget.getAttribute('data-name');
    const second = secondTarget.getAttribute('data-name') 

    if( first === second){

        setTimeout(() => {
            
            firstTarget.classList.remove('clicked');
            secondTarget.classList.remove('clicked');
  
            firstTarget.classList.add('right');
            secondTarget.classList.add('right');
    
            firstTarget = '';
            secondTarget = '';
            rightAnswers++;
            end();
        }, 1000)


    }else {

        setTimeout(() => {

            firstTarget.classList.remove('clicked');
            secondTarget.classList.remove('clicked');

            firstTarget = '';
            secondTarget = '';

        }, 1000)

    }
}

const reveal = ({ target }) => {

    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if(firstTarget === ''){
        target.parentNode.classList.add('clicked');
        firstTarget = target.parentNode;
    } else if(secondTarget === ''){
        target.parentNode.classList.add('clicked');
        secondTarget = target.parentNode;

        check();
    }

}

//create cards with classes

const createCard = (cards) => {

    
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');
    
    //add .png to the array "allCards" and set the cards image

    front.style.backgroundImage = `url('./images/${cards}.png')`;

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener('click', reveal)
    card.setAttribute('data-name', cards)

    return card;

}

//shuffle and start game

const createGame = () => {
    
    // num = Math.random() - 0.5;

    const shuffled =  allCards.sort( () => Math.random() - 0.5);

    shuffled.forEach((cards) => {
        
        const card = createCard(cards);
        game.appendChild(card);

    })
}

//initialize game

createGame();