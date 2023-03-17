const blackBrush = document.getElementById('black');
const tealBrush = document.getElementById('teal');
const greenBrush = document.getElementById('green');
const pinkBrush = document.getElementById('pink');
const rainbowBrush = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');

const userChoice = document.getElementById('userInput');

// DOM elements 
let canvas = document.getElementById('canvas');


// make grid function
function makeGrid(value){
    let gridSqaure = canvas.querySelectorAll('div');
    gridSqaure.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${value}), 1fr`

    let valueSquare = value * value;
    
    for(let i = 0; i < valueSquare; i++){
        grid = document.createElement('div');
        grid.id = 'newGrid';
        canvas.appendChild(grid)
    }
}

makeGrid(16)

userChoice.addEventListener('keypress', (e) => {
    let value = userChoice.value;
    if(e.key === 'Enter'){
        populate(value)
    }
})

function populate(value){
    if((value < 1) ||
        (value > 50) ||
        ( !typeof value)){
            alert('choose a number between 1 - 50 so your pc doesnt explode')
            return
        }
    makeGrid(userChoice.value)
    console.log(userChoice.value)
}

// paint function

function paint(color){
    console.log(color)
    const colorGrid = document.querySelectorAll('#newGrid');
    colorGrid.forEach(div => {
        div.addEventListener('click', () => {
            div.style.backgroundColor = color;
        })
    })
}

blackBrush.addEventListener('click', () => {
    paint('black')
})
  

tealBrush.addEventListener('click', () =>{
    paint('teal')
});

greenBrush.addEventListener('click', () =>{
    paint('green')
});

pinkBrush.addEventListener('click', () => {
    paint('pink')
});

rainbowBrush.addEventListener('click', () =>{});

eraser.addEventListener('click', () =>{
    paint('white')
});


// clear function
function clearGrid(){};


