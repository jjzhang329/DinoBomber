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
let game;

const mainMenu = document.getElementById("main-menu")
const instrOpenBtn = document.getElementById('instructions-open');
const sideBar = document.getElementById('side-bar')

mainMenu.querySelectorAll("button.start").forEach(btn => {
    btn.addEventListener("click", () => {
        game = new Game(ctx, btn.dataset.gameMode)
        game.start()
        // TODO: might not be necessary
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        mainMenu.classList.add("hidden");
    })
})

// let restart = document.getElementById('restart')
// restart.addEventListener('click', () => {

//     const game = new Game(ctx);
//     game.start();
//     startscreen[0].classList.add("hidden");
//     start.classList.add("hidden");
// })

const instrModal = document.getElementById('instructions-modal')
const instrClose = instrModal.querySelector(".close");
const winModal = document.getElementById('winModal')
const winClose = winModal.querySelector(".close")
const playAgain = winModal.querySelector(".playagain")

instrOpenBtn.onclick = function() {
    instrModal.classList.remove("hidden");
}

instrClose.onclick = function() {
    instrModal.classList.add("hidden");
}

playAgain.onclick = function() {
    game = new Game(ctx, game.gameMode);
    winModal.classList.add("hidden");
    game.start();
}

winClose.onclick = function(){
    winModal.classList.add("hidden")
    ctx.clearRect(0, 0, 960, 704)
    initMainMenu();
}

window.onclick = function (event) {
    if (event.target == instrModal) {
        instrModal.classList.add("hidden")
        winModal.classList.add("hidden")
    }
}

function initMainMenu() {
    ctx.fillStyle = 'white';
    ctx.font = '50px cabin catch';
    ctx.drawImage(startscreen,0, 0, 960, 704);
    ctx.drawImage(dino, 0, 0, 24, 28, 560, 270, 72, 84);
    ctx.fillText('VS', 450, 330);
    ctx.fillText('Ready to Play ?', 330, 200);
    ctx.drawImage(soldier, 26, 28, 27, 27, 330, 270, 87, 84);
    mainMenu.classList.remove("hidden")
    sideBar.classList.add("hidden");
}
