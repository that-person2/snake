import { getInputDirection } from "./input.js";

export const snakeSpeed = 7;
const snakeBody = [ 
    { x: 11, y: 11},
 ]

export function update() {

    let inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

} 

export function render(gameBoard) {
    gameBoard.innerHTML = ''

    snakeBody.forEach(segment => {
        const snakeEl = document.createElement('div')
        snakeEl.style.gridColumnStart = segment.x
        snakeEl.style.gridRowStart = segment.y
        snakeEl.classList.add('snake')

        gameBoard.appendChild(snakeEl)
    })

}