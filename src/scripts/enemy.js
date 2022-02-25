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
        this.speed = 16;
        this.moving = true;
        this.width = 25;
        this.height = 28;
        this.game = object.game;
        this.counter = 4;
        this.currentDir = 2;
    }

    draw(ctx){
      
        const enemySprite = new Image();
        enemySprite.addEventListener('load', ()=>{
            ctx.drawImage(enemySprite, this.width * this.frameX, this.height * this.frameY,
                this.width, this.height,
                this.x, this.y, 60, 64)  
        })
        enemySprite.src = 'src/assets/soldierAndBomb.png'
    }
  
    randomMove(){
        //sometimtes it will stuck for a few sec, need to fix later
    
        this.swithDir()
       
        
        if (this.currentDir === Direction.up && this.moveUp()){
            // console.log('moving up')
            this.y -= this.speed;
            this.width = 22;
            // this.height = 27;
            this.frameY = 3;
        };
        if (this.currentDir === Direction.down && this.moveDown()){
            // console.log('moving down')
            this.y += this.speed;
            this.width = 22;
            // this.height = 27;
            this.frameY = 2;
 
        };
        if (this.currentDir === Direction.left && this.moveLeft()){
            // console.log('moving left')
            this.x -= this.speed;
            this.width = 25;
            // this.height = 27;
            this.frameY = 0;
        }; 
        if (this.currentDir === Direction.right && this.moveRight()){ 
            // console.log('moving right') 
            this.x += this.speed;
            this.width = 26;
            // this.height = 27;
            this.frameY = 1;
        } 
      
    }

    swithDir() {

        const dir = this.availableMove()
        if(this.counter === 0){
            this.currentDir = dir[this.getRandomInt(0, dir.length)]
           this.counter = 4;
            
        }else{
            
            this.counter -= 1;
        }

    }
 

   getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
        //The maximum is exclusive and the minimum is inclusive
    }
   
    availableMove(){
        const moves = []
        if(this.moveUp()){moves.push(0)}
        if (this.moveDown()) {moves.push(1)}
        if(this.moveLeft()) {moves.push(2)}
        if (this.moveRight()) {moves.push(3)}
        return moves
    }


}