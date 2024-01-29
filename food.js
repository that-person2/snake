import { getSnakeBody } from "./snake.js";

export function getFoodOnBoard() {
    return foodOnBoard
}
export function setFoodOnBoard(value) {
    foodOnBoard == value
}
let foodOnBoard = {x: -1, y: -1}
export function createFood() {
    foodOnBoard = {x: Math.floor(Math.random() * 22), y: Math.floor(Math.random() * 22)}
    if (getSnakeBody().every(segment => segment.x != foodOnBoard.x && segment.y != foodOnBoard.y)) {
        return
    } else {
        createFood()
    }

}