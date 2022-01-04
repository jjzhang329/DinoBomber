
import MovingObjects from './movingObjects';

export default class Dino extends MovingObjects {

    constructor(object){
        super(object)
 
      
    }
 

    draw(ctx){
        const dinoSprite = new Image();
        //  ctx.clearRect(0, 0, 800, 480)
        dinoSprite.addEventListener('load', () =>        
            ctx.drawImage(dinoSprite, 
            this.width * this.frameX, this.height* this.frameY, 
            this.width, this.height,
            this.x, this.y, this.width * 2, this.height * 2))
        dinoSprite.src = "src/assets/DinoSheet.png"
    }

    move(key){
      
        if (key['ArrowUp']&& this.moveUp()) {    
            this.y -= this.speed;
            this.frameY = 3;
            
        }
        if (key['ArrowLeft'] && this.moveLeft()) {
           
            this.x -= this.speed;
            this.frameY = 0;
        }
        if (key['ArrowRight'] && this.moveRight()) {
           
            
            this.x += this.speed;
            this.frameY = 2;

        }
        if (key['ArrowDown'] && this.moveDown()) {
            this.y += this.speed
            this.frameY = 1;
        }
    }

    // moveUp(){
        
    //     let i = map.getRow(this.y) - 1;
        
    //    let j = map.getCol(this.x);
      

    //    if(map.emptyTile(j, i) && map.emptyTile(j+3, i)){
    //        return true
    //    }
    //    return false;
    // }

    // moveDown(){
    //     let i = map.getRow(this.y) + 4;
    //     let j = map.getCol(this.x);
        
    //     if (map.emptyTile(j, i) && map.emptyTile(j + 3, i)) {
    //         return true
    //     }
    //     return false;
        
    // }
    // moveLeft() {
    //     let i = map.getRow(this.y) ;
    //     let j = map.getCol(this.x) - 1;
    //     console.log([j, i])
    //     console.log([j, i+3])
    //     if (map.emptyTile(j, i) && map.emptyTile(j, i + 3) && map.emptyTile(j, i + 2)) {
    //         return true
    //     }
    //     return false;

    // }
    // moveRight() {
    //     let i = map.getRow(this.y);
    //     let j = map.getCol(this.x)+4;
    //     if (map.emptyTile(j, i) && map.emptyTile(j, i + 3) && map.emptyTile(j, i + 2)) {
            
    //         return true
    //     }
    //     return false;

    // }

   
}

