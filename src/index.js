import Game from './scripts/game';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startscreen = new Image()
const dino = new Image()
dino.src = 'src/assets/dinoSprite.png'
const soldier = new Image ()
soldier.src = 'src/assets/soldierAndBomb.png'
startscreen.addEventListener('load', initMainMenu)
startscreen.src = 'src/assets/startMap.png'
canvas.width = 960;
canvas.height = 704;

const startbutton = document.getElementById('start');
const instrOpenBtn = document.getElementById('instructions-open');
const navBar = document.getElementsByClassName('nav-bar')[0]
const sideBar = document.getElementById('side-bar')

startbutton.addEventListener('click', () => {
    const game = new Game(ctx)
    game.start()
    // TODO: might not be necessary
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    startbutton.style.display = 'none'
    instrOpenBtn.style.display = 'none'
    navBar.style.display = 'none'
})

// let restart = document.getElementById('restart')
// restart.addEventListener('click', () => {

//     const game = new Game(ctx);
//     game.start();
//     startscreen[0].style.display = 'none'
//     start.style.display = 'none'
// })

const instrModal = document.getElementById('instructions-modal')
const instrClose = instrModal.querySelector(".close");
const winModal = document.getElementById('winModal')
const winClose = winModal.querySelector(".close")
const playAgain = winModal.querySelector(".playagain")

instrOpenBtn.onclick = function() {
    instrModal.style.display = "block";
}

instrClose.onclick = function() {
    instrModal.style.display = "none"
}

playAgain.onclick = function(){
    const game = new Game(ctx)
    winModal.style.display = "none";
    game.start()
}

winClose.onclick = function(){
    winModal.style.display = "none";
    ctx.clearRect(0, 0, 960, 704)
    initMainMenu();
}

window.onclick = function (event) {
    if (event.target == instrModal) {
        instrModal.style.display = "none";
        winModal.style.display = "none"
    }
}

function initMainMenu() {
    ctx.fillStyle = 'white';
    ctx.font = '50px cabin catch';
    ctx.drawImage(startscreen,0, 0, 960, 704);
    ctx.drawImage(dino, 0, 0, 24, 28, 560, 270, 72, 84);
    ctx.fillText('VS', 450, 330);
    ctx.fillText('Ready to Play ?', 330, 200);
    ctx.drawImage(soldier, 26, 29, 27, 27, 330, 270, 87, 84);
    startbutton.style.display = 'block';
    instrOpenBtn.style.display = 'block';
    navBar.style.display = 'flex';
    sideBar.style.display ='none';
}
