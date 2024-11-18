import Map from './map';
import Dino from './dino';
import KeyHandler from './keyHandler';
import Enemy from './enemy';
import Bomb from './bomb';

let fps, fpsInterval, startTime, now, then, elapsed;
export default class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.end = false;
        this.paused = false;
        this.map = new Map();
        this.dino = new Dino({x:832, y:576, game: this});
        this.enemy = new Enemy({x:64, y:64, game:this})
        this.key = new KeyHandler(this.dino).keys;
        this.explosion = [];
    }

    start(){
       const sideBar = document.getElementById('side-bar')
       sideBar.style.display = 'flex'
       this.startAnimating(6)
    }

   gameOver(){
       //use a modal or run cancelanimationrequest
        if(this.end){
            const winModal = document.getElementById('winModal')
            const gameMessage = document.getElementsByClassName('game-message')[0]
            winModal.style.display = 'block'

            let message
            if(this.dino.status === 'burned'){
                message = 'Game Over! You are burned!'

            }else if(!this.enemy.status){
                message = 'You Win! You are unbeatable!'

            }else{
                message = 'Game Over! Soldier stabbed you, play again?'
            }
            gameMessage.innerHTML = message
        }
    }

    startAnimating(fps) {
        fpsInterval = 1000 / fps;
        then = Date.now();
        startTime = then;
        this.animate()
    }

    animate(){
        if(!this.end){
            requestAnimationFrame(this.animate.bind(this))
        }

        this.gameOver()
        // this.ctx.clearRect(0, 0, 800, 480)
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            this.map.draw(this.ctx);
            this.dino.draw(this.ctx);
            if (!this.end) {
                this.enemy.draw(this.ctx)
                this.enemy.randomMove();
                this.dino.move(this.key);
                this.collision(this.enemy, this.dino)
            };

           if(this.dino.bomb){
               this.dino.newBomb.forEach(egg =>{
                   let idx = this.map.getIndex(egg.bombX, egg.bombY)
                   this.map.tiles[idx] = 1
                    Bomb.dropBomb(egg);
                    if(egg.sourceX < egg.width) egg.sourceX += egg.width
                     else{egg.sourceX = 0};
                    this.dino.clearBomb(egg)

                    }
                )
            }
            if(this.explosion.length)this.explosion[0].explode()
            this.handlePlayerFrame();
        };
    }

    handlePlayerFrame() {
        if (this.dino.frameX < 1 && this.dino.moving) {
            this.dino.frameX++
        } else { this.dino.frameX = 0 }
        if(this.enemy.frameX < 1){
            this.enemy.frameX++
        }else{this.enemy.frameX = 0}
    }

    collision(object1, object2) {
        if(object1.x === object2.x){
            if(Math.abs(object1.y - object2.y) <= 64){
                object2.status = false;
                this.end = true;
            }
        } else if(object1.y === object2.y) {
            if(Math.abs(object1.x - object2.x) <= 60){
                object2.status = false;
                this.end = true;
            }
        }
    }
}
