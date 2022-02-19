import Dino from './scripts/dino';
import Game from './scripts/game';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startscreen = new Image()
const dino = new Image()
dino.src = 'src/assets/dinoSprite.png'
const soldier = new Image ()
soldier.src = 'src/assets/Enemies.png'
startscreen.addEventListener('load', ()=>{
    ctx.fillStyle = 'white';
    ctx.font = '50px cabin catch';
    ctx.drawImage(startscreen,0, 0, 960, 704),
    ctx.drawImage(dino, 0, 0, 24, 28, 560, 300, 72, 84),
    ctx.fillText('VS', 450, 360)
    ctx.fillText('Ready to Play ?', 330, 250)
    ctx.drawImage(soldier, 25, 27, 29, 26, 330, 300, 87, 84)

})
startscreen.src = 'src/assets/startMap.png'
canvas.width = 960;
canvas.height = 704;

const startbutton = document.getElementById('start');
const instructionbutton = document.getElementById('myBtn');
// const startscreen = document.getElementsByClassName('startscreen')

startbutton.addEventListener('click', ()=>{
   const game = new Game(ctx)
   game.start()
   
   ctx.clearRect(0, 0, canvas.width, canvas.height)

    startbutton.style.display = 'none'
    instructionbutton.style.display = 'none'
})


// let restart = document.getElementById('restart')
// restart.addEventListener('click', () => {

//     const game = new Game(ctx);
//     game.start();
//     startscreen[0].style.display = 'none'
//     start.style.display = 'none'
// })

const modal = document.getElementById('myModal')

const span = document.getElementsByClassName("close")[0];
instructionbutton.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}