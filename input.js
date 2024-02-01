import snakeBody from "./snake.js"
let inputDirection = {x: 0, y: 0}

window.addEventListener('keydown', e => {
    console.log(inputDirection)
    if (e.key == 'ArrowUp' && inputDirection.y != 1) {
        inputDirection = { x: 0, y: -1 }
    }
    if (e.key == 'ArrowDown' && inputDirection.y != -1) {
        inputDirection = { x: 0, y: 1 }
    }
    if (e.key == 'ArrowLeft' && inputDirection.x != 1) {
        inputDirection = { x: -1, y: 0 }
    }
    if (e.key == 'ArrowRight' && inputDirection.x != -1) {
        inputDirection = { x: 1, y: 0 }
    }
})



export function getInputDirection() {
    return inputDirection
}


export function setInputDirection(value) {
    inputDirection = value
}