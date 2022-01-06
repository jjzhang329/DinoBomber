
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
        //  ctx.clearRect(0, 0, 800, 480)
        if(this.status === 'burned'){
            this.width = 21;
            this.height = 29;
            dinoSprite.src = 'src/assets/deadDino.png'
        } else { dinoSprite.src = "src/assets/dinoSprite.png"}
        dinoSprite.addEventListener('load', () =>        
            ctx.drawImage(dinoSprite, 
            this.width*this.frameX, this.height*this.frameY, 
            this.width, this.height,
            this.x, this.y, this.width * 2, this.height * 2))
        
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
            this.newBomb.push(new Bomb(this.x, this.y, this.game));
            this.bomb += 1;
        }
        
    }

    clearBomb(bomb){
       
 
        if(bomb.timer === 0){
        //    console.log(bomb.blastLeft())
            // console.log(bomb.blastRight()) 
            // console.log(bomb.blastUp())
            // console.log(bomb.blastDown())
            this.game.explosion.push(bomb)
            bomb.boom()
            let idx = this.game.map.getIndex(bomb.bombX, bomb.bombY)
            this.game.map.tiles[1][idx] = 0;
            this.newBomb.shift();
            this.bomb -= 1;


        }else(bomb.timer--)
    }

   
   
}

