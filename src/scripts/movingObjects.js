import Map from './map'
let map = new Map();
export default class MovingObjects{
    constructor(object){
        this.x = object.x;
        this.y = object.y;
        this.width = 32;
        this.height = 32;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 12;
        this.moving = false
    }



    moveUp() {

        let i = map.getRow(this.y);
        
        let j = map.getCol(this.x);
        // hardcoded to 12 so that dino can reach the top edge
        if(this.y < 12)return false;

        if (map.emptyTile(j, i)&&map.emptyTile(j + 2, i)) {
            return true
        }
        return false;
    }

    moveDown() {
        let i = map.getRow(this.y) + 4;
        let j = map.getCol(this.x);
        if(this.y > canvas.height - this.height*2)return false;

        if (map.emptyTile(j, i) && map.emptyTile(j + 3, i)) {
            return true
        }
        return false;

    }
    moveLeft() {
   
        let i = map.getRow(this.y);
        let j = map.getCol(this.x);
         // hardcoded to 12 so that dino can reach the top edge
        if(this.x < 12)return false;
        if (map.emptyTile(j, i) && map.emptyTile(j, i + 2) && map.emptyTile(j, i + 2)) {
            return true
        }
        return false;

    }
    moveRight() {
        if(this.x > canvas.width - this.width*2)return false;
        let i = map.getRow(this.y);
        let j = map.getCol(this.x) + 4;
        if (map.emptyTile(j, i) && map.emptyTile(j, i + 3) && map.emptyTile(j, i + 2)) {

            return true
        }
        return false;

    }
}