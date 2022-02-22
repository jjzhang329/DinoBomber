
import Bomb from './bomb';
import MovingObjects from './movingObjects';

export default class Dino extends MovingObjects {

    constructor(object){
        super(object)
        this.width = 24;
        this.height = 28;
        this.bomb = 0;
        this.game = object.game;
        // this.bomb = [];
        this.newBomb = [];
        this.status = 'live';
        //reset width and heigh when moving
      ;
    }
 

    draw(ctx){
        const dinoSprite = new Image();
        if(this.status === 'burned'){
            this.width = 21;
            this.height = 29;
            dinoSprite.src = 'src/assets/deadDino.png'
        } else { dinoSprite.src = "src/assets/dinoSprite.png"}
        dinoSprite.addEventListener('load', () =>        
            ctx.drawImage(dinoSprite, 
            this.width*this.frameX, this.height*this.frameY, 
            this.width, this.height,
            this.x,this.y, 60, 64))
        
    }

    move(key){
      
        if (key['ArrowUp']&& this.moveUp()) {    
            
            this.y -= this.speed;      
            this.width = 21;
            this.height = 29;
            this.frameY = 2.93;
        }
        if (key['ArrowLeft'] && this.moveLeft()) {        
            this.x -= this.speed;
            this.width = 24;
            this.height = 28;
            this.frameY = 0;
        } 
        if (key['ArrowRight'] && this.moveRight()) {    
            this.x += this.speed;
            this.width = 24;
            this.height = 28;
            this.frameY = 1;
        }      
        if (key['ArrowDown'] && this.moveDown()) {
            this.y += this.speed
            this.width = 21;
            this.height = 29;
            this.frameY = 1.93;
        }
        if (key['Space'] && this.emptyTile(this.x, this.y)) {
            console.log(this.x, this.y)
            this.newBomb.push(new Bomb(this.x, this.y, this.game));
            this.bomb += 1;
        }
        
    }

    clearBomb(bomb){
       
 
        if(bomb.timer === 0){
       
            this.game.explosion.push(bomb)
            // bomb.explode()
            let idx = this.game.map.getIndex(bomb.bombX, bomb.bombY)
            this.game.map.tiles[idx] = 0;
            this.newBomb.shift();
            this.bomb -= 1;


        }else(bomb.timer--)
    }

   
   
}

