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
        this.key = new KeyHandler(this.dino).keys;
        this.explosion = [];
        
    }
    
   start(){
       this.startAnimating(6)
    }
    // gameUpdate(){
    //     let pause = document.getElementById('pause');
       
    //     pause.addEventListener('click', ()=>{
    //         this.paused()
    //     })
         
    // }
    // paused(){
    //     if(this.paused){
    //         this.paused === false;
    //     }else{
    //         this.paused === true;
    //     }
    // }


   gameOver(){
       //use a modal or run cancelanimationrequest
        if(this.end){
    
        this.ctx.fillStyle = 'white';
        this.ctx.font = '50px cabin catch';
        if(this.dino.status === 'burned'){
          this.ctx.fillText('Burned! Game Over!', 200, 200)
          this.dino.draw(this.ctx)
        
        } else { this.ctx.fillText('Game Over T_T!', 250, 240)}
    
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
            if (!this.end) { this.enemies.draw(this.ctx)};
            this.enemies.randomMove();      
            this.dino.move(this.key);
            this.collision(this.enemies, this.dino)
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

        
        if(object1.x > object2.x + object2.width||
            object1.x + object1.width < object2.x ||
            object1.y > object2.y + object2.height ||
            object1.y+ object1.height < object2.height
        ){return false;}
        else{
            this.dino.status = 'killed'
            this.end = true;
            return true;
            }
              
    }

  

}