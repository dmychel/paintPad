// Brushes
const blackBrush = document.getElementById('black');
const tealBrush = document.getElementById('teal');
const greenBrush = document.getElementById('green');
const pinkBrush = document.getElementById('pink');
const rainbowBrush = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');

// DOM elements 
let canvas = document.getElementById('canvas');


// make grid function
function makeGrid(value){
    // let gridSqaure = canvas.querySelectorAll('div');
    // gridSqaure.forEach((div) => div.remove());
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
  

tealBrush.addEventListener('click', () =>{});

greenBrush.addEventListener('click', () =>{});

pinkBrush.addEventListener('click', () => {});

rainbowBrush.addEventListener('click', () =>{});

eraser.addEventListener('click', () =>{});


// clear function
function clearGrid(){};


