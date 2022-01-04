import MovingObjects from "./movingObjects";
const Direction= {
    up: 0,
    down: 1,
    left: 2,
    right: 3,
}
export default class Enemy extends MovingObjects{

    constructor(object){
        super(object)
        this.speed = 6;
        this.moving = true;
        this.width = 25;
        this.height = 27;
        //moving down, right, up, left
        //[0, 1], [1, 0], [0, -1], [-1, 0]
      this.counter = 3;
        this.currentDir = 1;
    }

    draw(ctx){
        const enemySprite = new Image();
        enemySprite.addEventListener('load', ()=>{
            ctx.drawImage(enemySprite, this.width * this.frameX, this.height * this.frameY,
                this.width, this.height,
                this.x, this.y, this.width*2, this.height*2)  
        })
        enemySprite.src = 'src/assets/enemies.png'
    }
  
    randomMove(){
        
        this.swithDir();
        //if (this.x is the same)then swithDir

        if (this.currentDir === Direction.up && this.moveUp()){
            this.y -= this.speed;
            this.width = 25;
            this.height = 27;
            this.frameY = 0;
        };
        if (this.currentDir === Direction.down && this.moveDown()){
            this.y += this.speed;
            this.width = 25;
            this.height = 27;
            this.frameY = 0;
 
        };
        if (this.currentDir === Direction.left && this.moveLeft()){
            this.x -= this.speed;
            this.width = 25;
            this.height = 27;
            this.frameY = 0;
        }; 
        if (this.currentDir === Direction.right && this.moveRight()){  
            this.x += this.speed;
            this.width = 26;
            this.height = 27;
            this.frameY = 1;
        } 
      
    }

    swithDir() {

        if(this.counter === 0){
            this.currentDir = this.getRandomInt(0, 4)
           this.counter = 4;
            
        }else{
            
            this.counter -= 1;
        }
        // if (this.moveUp() && this.moveLeft() && this.moveRight() && this.moveDown()) {
        //     this.currentDir = this.getRandomInt(0, 4)
        // }


    }
 

   getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
        //The maximum is exclusive and the minimum is inclusive
    }
   



}