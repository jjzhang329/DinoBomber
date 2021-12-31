const Dino = require('./scripts/dino.js')


const keys = [];
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
ctx.clearRect(0, 0, canvas.width, canvas.height)
const newDino = new Dino(ctx)


window.addEventListener('keydown', function (e) {
    keys[e.keycode] = true;
})
window.addEventListener('keyup', function (e) {
    delete keys[e.keycode];
})
