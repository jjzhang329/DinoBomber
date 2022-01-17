import Game from './scripts/game';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startscreen = new Image()
startscreen.addEventListener('load', ()=>{
    ctx.drawImage(startscreen,0,0, 960, 704)
})
startscreen.src = 'src/assets/Tiles.png'
canvas.width = 960;
canvas.height = 704;

const start = document.getElementById('start');

// const startscreen = document.getElementsByClassName('startscreen')

start.addEventListener('click', ()=>{
   const game = new Game(ctx)
   game.start()
//    startscreen[0].style.display = 'none'
   start.style.display = 'none'
})


// let restart = document.getElementById('restart')
// restart.addEventListener('click', () => {

//     const game = new Game(ctx);
//     game.start();
//     startscreen[0].style.display = 'none'
//     start.style.display = 'none'
// })

const modal = document.getElementById('myModal')
const btn = document.getElementById('myBtn')
const span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
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