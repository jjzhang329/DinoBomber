import Game from './scripts/game';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startscreen = new Image()
const dino = new Image()
dino.src = 'src/assets/dinoSprite.png'
const soldier = new Image ()
soldier.src = 'src/assets/soldierAndBomb.png'
startscreen.addEventListener('load', ()=>{
    ctx.fillStyle = 'white';
    ctx.font = '50px cabin catch';
    ctx.drawImage(startscreen,0, 0, 960, 704),
    ctx.drawImage(dino, 0, 0, 24, 28, 560, 270, 72, 84),
    ctx.fillText('VS', 450, 330)
    ctx.fillText('Ready to Play ?', 330, 200)
    ctx.drawImage(soldier, 26, 29, 27, 27, 330, 270, 87, 84)

})
startscreen.src = 'src/assets/startMap.png'
canvas.width = 960;
canvas.height = 704;

const startbutton = document.getElementById('start');
const instructionbutton = document.getElementById('myBtn');
const navBar = document.getElementsByClassName('nav-bar')[0]
const sideBar = document.getElementById('side-bar')

startbutton.addEventListener('click', ()=>{
   const game = new Game(ctx)
   game.start()   
   ctx.clearRect(0, 0, canvas.width, canvas.height)
    startbutton.style.display = 'none'
    instructionbutton.style.display = 'none'
    navBar.style.display = 'none'
})


// let restart = document.getElementById('restart')
// restart.addEventListener('click', () => {

//     const game = new Game(ctx);
//     game.start();
//     startscreen[0].style.display = 'none'
//     start.style.display = 'none'
// })

const modal = document.getElementById('myModal')
const winModal = document.getElementById('winModal')
const span1 = document.getElementById("close1");
const span2 = document.getElementById("close2")
const playAgain = document.getElementsByClassName('playagain')[0]
instructionbutton.onclick = function () {
    modal.style.display = "block";
}
playAgain.onclick = function(){
    const game = new Game(ctx)
    winModal.style.display = "none";
    game.start() 
   
}
span1.onclick = function () {
    modal.style.display = "none"
}
span2.onclick = function(){
    winModal.style.display = "none";
    ctx.clearRect(0, 0, 960, 704)
    
    ctx.fillStyle = 'white';
    ctx.font = '50px cabin catch';
    ctx.drawImage(startscreen, 0, 0, 960, 704),
    ctx.drawImage(dino, 0, 0, 24, 28, 560, 270, 72, 84),
    ctx.fillText('VS', 450, 330)
    ctx.fillText('Ready to Play ?', 330, 200)
    ctx.drawImage(soldier, 26, 29, 27, 27, 330, 270, 87, 84)
    startbutton.style.display = 'block'
    instructionbutton.style.display = 'block'
    navBar.style.display = 'flex';
    sideBar.style.display ='none'

}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        winModal.style.display = "none"
    }
}