import Game from './scripts/game';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 480;

const start = document.getElementById('start');

const startscreen = document.getElementsByClassName('startscreen')

start.addEventListener('click', ()=>{
   const game = new Game(ctx)
   game.start()
   startscreen[0].style.display = 'none'
   start.style.display = 'none'
})


// let restart = document.getElementById('restart')
// restart.addEventListener('click', () => {

//     const game = new Game(ctx);
//     game.start();
//     startscreen[0].style.display = 'none'
//     start.style.display = 'none'
// })