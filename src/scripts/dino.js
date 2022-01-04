
import Bomb from './bomb';
import MovingObjects from './movingObjects';

export default class Dino extends MovingObjects {

    constructor(object){
        super(object)
        this.width = 24;
        this.height = 28;
        
        this.game = object.game;
        this.bomb = [];
        //reset width and heigh when moving
      ;
    }
 

    draw(ctx){
        const dinoSprite = new Image();
        //  ctx.clearRect(0, 0, 800, 480)
        dinoSprite.addEventListener('load', () =>        
            ctx.drawImage(dinoSprite, 
            this.width*this.frameX, this.height*this.frameY, 
            this.width, this.height,
            this.x, this.y, this.width * 2, this.height * 2))
        dinoSprite.src = "src/assets/dinoSprite.png"

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
            let newBomb = new Bomb(this.x-this.width, this.y+this.width, this.game)
            this.bomb.push(newBomb)


        }
        
    }

    setBomb(){
        console.log(this.bomb)
        let egg = this.bomb[0]
        egg.dropBomb()
        let idx = this.game.map.getIndex(egg.x, egg.y)
        this.game.map.tiles[1][idx] = 1
        
        console.log(this.bomb)
        if(egg.sourceX < egg.width) egg.sourceX += egg.width
        else{egg.sourceX = 0};

        
        setTimeout(()=>{
            this.bomb.shift()
            this.game.map.tiles[1][idx] = 0;
            egg.timer = 0
            
        }, egg.timer*1000)
    
    }

    explosion(){

    }
   
}

