const Dino = require('./scripts/dino.js')


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const newDino = new Dino(ctx)

//if this game clieckd, start game;
//if this cliecked, restart game;
//

function animate() {
   
  
}
animate();
