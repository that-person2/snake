import { createFood, getFoodOnBoard, setFoodOnBoard } from "./food.js";
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
    if  ((snakeBody[0].y > 20 && getInputDirection().y == 1) || (snakeBody[0].y < 1 && getInputDirection().y == -1) || (snakeBody[0].x < 1 && getInputDirection().x == -1) || (snakeBody[0].x > 20 && getInputDirection().x == 1)) {
        hasLost()
    }
    if (snakeBody.some((segment, index) => snakeBody[0].x == segment.x && snakeBody[0].y == segment.y && index != 0)) {
        hasLost()
    }


    let inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }


    // If snake in collision with food
    if (snakeBody[0].x == getFoodOnBoard().x && snakeBody[0].y == getFoodOnBoard().y) {
        snakeBody.unshift(getFoodOnBoard())
        setFoodOnBoard({})
        createFood()
    }
    if (snakeBody[0].y  == getFoodOnBoard().y && snakeBody[0].x == getFoodOnBoard().x) {
        snakeBody.unshift(getFoodOnBoard())
        setFoodOnBoard({})
        createFood()
    }
    

    //snake moving
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y


} 

export function render(gameBoard) {
    gameBoard.innerHTML = ''

    //snake rendering
    snakeBody.forEach((segment, index) => {
        const snakeEl = document.createElement('div')
        snakeEl.style.gridColumnStart = segment.x
        snakeEl.style.gridRowStart = segment.y
        snakeEl.classList.add('snake')
        if (index == 0) {
            snakeEl.classList.add('head')
        } else {
            snakeEl.classList.remove('head')
        }
        console.log('x: ' + segment.x + 'y: ' + segment.y )

        gameBoard.appendChild(snakeEl)
    })
    
    //food render
    if (getFoodOnBoard() != {}) {
        let foodEl = document.createElement('div')
        foodEl.style.gridColumnStart = getFoodOnBoard().x
        foodEl.style.gridRowStart = getFoodOnBoard().y
        foodEl.classList.add('food')
        gameBoard.appendChild(foodEl)
    }
}

function hasLost() {
    alert('lose')
    location.reload()
}


