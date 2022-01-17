

export default class MovingObjects{
    constructor(object){
        this.x = object.x;
        this.y = object.y;  
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 13;
        this.game = object.game;
        this.moving = false;
        
    }


    moveUp() {

        let i = this.game.map.getRow(this.y) 
        let j = this.game.map.getCol(this.x);
     
            if (i <= 4) {
                return false
            } else if (this.game.map.emptyTile(j, i)&&this.game.map.emptyTile(j+3, i)){
                return true
            }
        
    }

    moveDown() {
        
        let i = this.game.map.getRow(this.y)
        let j = this.game.map.getCol(this.x);
 
            if (i >= canvas.height/16 - 8) {
                return false
            } else if (this.game.map.emptyTile(j, i)&&this.game.map.emptyTile(j+3, i)){
                return true
            }   

    }
    moveLeft() {

        let i = this.game.map.getRow(this.y);
        let j = this.game.map.getCol(this.x); 
        console.log(i, j)
            if(j <= 4) {
                return false
            } else if (this.game.map.emptyTile(j-1, i+1)&&this.game.map.emptyTile(j-1, i+3)){
        
                return true         
            }
     

    }
    moveRight() {

   
        let i = this.game.map.getRow(this.y);
        let j = this.game.map.getCol(this.x);

            if (j >= canvas.width/16 - 8) {
                return false
            } else if (this.game.map.emptyTile(j+3, i+1)&&this.game.map.emptyTile(j+3, i+3)){
           
                return true
            }

    }
    emptyTile(x, y){
        let i = this.game.map.getRow(x)
        let j = this.game.map.getCol(y)
        return this.game.map.emptyTile(i, j)
    }
}