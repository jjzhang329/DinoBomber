

export default class MovingObjects{
    constructor(object){
        this.x = object.x;
        this.y = object.y;  
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 12;
        this.game = object.game;
        this.moving = false;
        
    }


    moveUp() {

        let width = Math.floor((this.width * 2) / 16)
        let height = Math.floor((this.height * 2) / 16)
        let i = this.game.map.getRow(this.y) 
        let j = this.game.map.getCol(this.x);
        if (this === this.game.enemies) {
            let midY = Math.floor(height / 2) + 1
            let midX = Math.floor(width/2) + 1
            if (i <= 0) {
                return false
            } else if (this.game.map.emptyTile(j, i-1)&&this.game.map.emptyTile(j+midX, i-midY)&&this.game.map.emptyTile(j+width, i-1)) {
                return true
            }
        } 

        if(this === this.game.dino){
        
            if(this.y <= 0)return false;
            else if (this.game.map.emptyTile(j, i) && this.game.map.emptyTile(j+width, i)) {
                return true
            }
        }
    }

    moveDown() {
        let width = Math.floor((this.width * 2)/16)
        let height = Math.floor((this.height * 2)/16)
        let i = this.game.map.getRow(this.y) + height
        let j = this.game.map.getCol(this.x);
      
        if (this === this.game.enemies) {
            let midY = Math.floor(height / 2) + 1
            let midX = Math.floor(width / 2) + 1
            
            if (i > canvas.height/16 - height+1) {
                return false
            } else if (this.game.map.emptyTile(j, i+1)&&this.game.map.emptyTile(j+width, i+1)&&this.game.map.emptyTile(j+midX, i+midY)){
               
                return true
            }

        }     
        if (this === this.game.dino) {
  
            
            if (i > canvas.height/16 - height + 1) return false;
            else if (this.game.map.emptyTile(j, i) && this.game.map.emptyTile(j+width, i)) {
                return true
            }
        }   

    }
    moveLeft() {

        let width = Math.floor((this.width * 2) / 16)
        let height = Math.floor((this.height * 2) / 16)  
        let i = this.game.map.getRow(this.y);
        let j = this.game.map.getCol(this.x); 
        
        if (this === this.game.enemies) {
            let midX = Math.floor(width/2)+1;
            let midY = Math.floor(height / 2) + 1
            // console.log([j, i])  
            // console.log(this.x)
            if(this.x <= 0) {
                return false
            } else if (this.game.map.emptyTile(j-1, i)&&this.game.map.emptyTile(j-1, i+height)&&this.game.map.emptyTile(j-midX, i+midY)){
        
                return true         
            }
               
        }  
        if (this === this.game.dino) {
            
            if (this.x <= 0) return false;

            else if (this.game.map.emptyTile(j, i) && this.game.map.emptyTile(j, i+height)) {
                return true
            }
        }       

    }
    moveRight() {

        let width = Math.floor((this.width * 2) / 16)
        let height = Math.floor((this.height * 2) / 16)


        let i = this.game.map.getRow(this.y);
        let j = this.game.map.getCol(this.x);
        if (this === this.game.enemies) {
            let midX = Math.floor(width / 2)+1;
            let midY = Math.floor(height / 2) + 1
           j+= width
            if (j > canvas.width/16 - width) {
                return false
            } else if (this.game.map.emptyTile(j+width, i)&&this.game.map.emptyTile(j+width, i+height)&&this.game.map.emptyTile(j+midX, i+midY)){
           
                return true
            }

        }    
        if (this === this.game.dino) {

            if (i > canvas.width/16 - width) return false;

            else if (this.game.map.emptyTile(j+width, i) && this.game.map.emptyTile(j+width, i+height)) {
                return true
            }
        }     

    }
    emptyTile(x, y){
        let i = this.game.map.getRow(x)
        let j = this.game.map.getCol(y)
        return this.game.map.emptyTile(i, j)
    }
}