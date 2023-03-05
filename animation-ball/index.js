'use strict'

const ball = document.querySelector('.ball');
let ballParams = ball.getBoundingClientRect();

const maxWidth = window.innerWidth - ballParams.width;
const maxHeight = window.innerHeight - ballParams.height;
let directionX = 1;
let directionY = 1;
const SPEED = 10;

function moving() {
    ballParams = ball.getBoundingClientRect();

    let x = ballParams.x + (1 * SPEED) * directionX;
    let y = ballParams.y + (1 * SPEED) * directionY;

    if (ballParams.x >= maxWidth && directionX > 0 || ballParams.x <= 0 && directionX < 0) directionX *= -1;
    if (ballParams.y >= maxHeight && directionY > 0 || ballParams.y <= 0 && directionY < 0) directionY *= -1;

    ball.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(moving)
}
moving()

console.log(ballParams);