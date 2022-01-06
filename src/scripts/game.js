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
        this.dino = new Dino({x:600, y:420, game: this});
        this.enemies = new Enemy({x:0, y:200, game:this})
        //maybe after Dino move, add enemies?
        this.key = new KeyHandler(this.dino).keys;
        this.explosion = [];
        this.startAnimating(6);
          
    }
    
    start(){

    }

   gameOver(){
        this.collision(this.enemies, this.dino)
        if (this.end){
            console.log('end')
            this.ctx.fillStyle = 'black';
            this.ctx.font = '50px cabin catch';
            this.ctx.fillText('Game over!', 300, 240);
          

        }
   }
    paused(){
        // add an eventlistener
        if(this.paused){
            this.paused = false;
        }else this.paused = true;

    }
    startAnimating(fps) {
        fpsInterval = 1000 / fps;    
        then = Date.now();
        startTime = then;
        this.animate();
    }

    animate(){
        
        requestAnimationFrame(this.animate.bind(this))   
        // this.ctx.clearRect(0, 0, 800, 480)
        now = Date.now();
       elapsed = now - then;    
        if (elapsed > fpsInterval) {    
            then = now - (elapsed % fpsInterval);
            // console.log(this.dino.x)
            // console.log(this.dino.y)
            this.gameOver()
            
            this.map.draw(this.ctx);
            this.dino.draw(this.ctx);
            this.enemies.draw(this.ctx);
            this.enemies.randomMove();      
            this.dino.move(this.key);
            
           if(this.dino.bomb){
               this.dino.newBomb.forEach(egg =>{
                   let idx = this.map.getIndex(egg.bombX, egg.bombY)
                   this.map.tiles[1][idx] = 1
                    Bomb.dropBomb(egg);
                    if(egg.sourceX < egg.width) egg.sourceX += egg.width
                     else{egg.sourceX = 0};
                    this.dino.clearBomb(egg)

                    }
                )
            }
            if(this.explosion.length){
               
                this.explosion[0].explode()
            }
            // console.log(this.map.obstacles().length)
           
            this.handlePlayerFrame();


            
        };   
        
    }
    handlePlayerFrame() {
        if (this.dino.frameX < 1 && this.dino.moving) {
            this.dino.frameX++
        } else { this.dino.frameX = 0 }
        if(this.enemies.frameX < 1){
            this.enemies.frameX++
        }else{this.enemies.frameX = 0}
    }

    
    collision(object1, object2){
        //object should have location x and y, and size
        // if (this.enemies.x > this.dino.x + this.dino.width ||
        //     this.enemies + this.enemies.width < this.dino.x ||
        //     this.enemies.y > this.dino.y + this.dino.height ||
        //     this.enemies.y + this.enemies.height < this.dino.y){
        //     return false;
        // }else{
        //     return true;
        // }   
        
        if(object1.x > object2.x + object2.width||
            object1.x + object1.width < object2.x ||
            object1.y > object2.y + object2.height ||
            object1.y+ object1.height < object2.height
        ){return false;}
        else{
            this.end = true;
            return true;
            }
              
    }

  

}