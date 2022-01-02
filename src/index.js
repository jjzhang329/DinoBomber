import Game from './scripts/game';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 480;
// ctx.clearRect(0, 0, 800, 480)
const game = new Game(ctx)
