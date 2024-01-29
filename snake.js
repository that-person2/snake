import { foodOnBoard } from "./food.js";
import { getInputDirection } from "./input.js";

export const snakeSpeed = 7;
const snakeBody = [ 
    { x: 11, y: 11},
 ]

export function getSnakeBody() {
    return snakeBody
}

export function update() {
    //Lose detection
    if  ((snakeBody[0].y > 20 || snakeBody[0].y < 1) && (getInputDirection().y == -1 || getInputDirection().y == 1) || (snakeBody[0].x < 1 || snakeBody.x > 20) && (getInputDirection().x == -1 || getInputDirection().x == 1)) {
        hasLost()
    }


    let inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }


    if () {
        
    }

    //snake moving
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y


} 

export function render(gameBoard) {
    gameBoard.innerHTML = ''

    //snake rendering
    snakeBody.forEach(segment => {
        const snakeEl = document.createElement('div')
        snakeEl.style.gridColumnStart = segment.x
        snakeEl.style.gridRowStart = segment.y
        snakeEl.classList.add('snake')
        console.log('x: ' + segment.x + 'y: ' + segment.y )

        gameBoard.appendChild(snakeEl)
    })
    
    //food render
    let foodEl = document.createElement('div')
    foodEl.style.gridColumnStart = foodOnBoard.x
    foodEl.style.gridRowStart = foodOnBoard.y
    foodEl.classList.add('food')
    gameBoard.appendChild(foodEl)
}

function hasLost() {
    alert('lose')
    location.reload()
}