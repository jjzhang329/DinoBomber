// import dino from './scripts/dino'
// import map from './scripts/tileData';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 480;
const map = new Image();
map.src = "src/assets/Tiles.png";
const DinoSprite = new Image();
DinoSprite.onload = drawSprite;
DinoSprite.src = "src/assets/DinoSheet.png";

const keys = [];

const dino = {
    x: 600,
    y: 416,
    width: 32,
    height: 32,
    frameX: 0,
    frameY: 0,
    speed: 10,
    moving: false
};




function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function (e) {
    keys[e.key] = true;
    dino.moving = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.key];
    dino.moving = false;
});
function move() {   
    if (keys['ArrowUp'] && dino.y > 5){
     dino.y -= dino.speed;
     dino.frameY = 3;
    }
    if(keys['ArrowLeft'] && dino.x > 0){
        dino.x -= dino.speed;
        dino.frameY = 0;
    }
    if(keys['ArrowRight'] && dino.x < canvas.width - dino.width*2){
        dino.x += dino.speed;
        dino.frameY = 2;
        
    }
    if (keys['ArrowDown'] && dino.y < canvas.height - dino.height * 2){
        dino.y += dino.speed
        dino.frameY = 1;
    }
}
function handlePlayerFrame(){
    if(dino.frameX < 1 && dino.moving){
        dino.frameX ++
    }else{dino.frameX = 0}
}

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}
function animate() {
    requestAnimationFrame(animate);
    
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSprite(map, 0, 0, 800, 480, 0, 0, 800, 480)
        drawSprite(DinoSprite, dino.width * dino.frameX, dino.height*dino.frameY, dino.width, dino.height,
        dino.x, dino.y, dino.width*2, dino.height*2);
    move();
    handlePlayerFrame();
    }
}
startAnimating(8);