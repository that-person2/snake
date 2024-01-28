import { update, render, snakeSpeed } from './snake.js'

let lastFrameTime = 0

function main(currentTime) {
    window.requestAnimationFrame(main)
    //delta time in seconds
    const dtInSecs = (currentTime - lastFrameTime) / 1000
    
    if (dtInSecs < 1 / snakeSpeed) return
    
    lastFrameTime = currentTime
    
    
    update()
    render(document.getElementById('game-board'))
    
}

window.requestAnimationFrame(main)

