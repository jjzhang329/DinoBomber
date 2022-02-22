
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
export default class Bomb{
    constructor(x, y, game){
        //x, y is the previous bomb location when space pressed
        this.dinoX = x;
        this.dinoY = y;
        this.game = game;
        this.col = game.map.getCol(this.dinoX)
        this.row = game.map.getRow(this.dinoY)
        this.bombX = this.dinoX+8;
        this.bombY = this.dinoY+20;    
        this.width= 16;
        this.height= 18;
        this.sourceX= 0;
        this.sourceY= 162;
        this.src= 'src/assets/Enemies.png';   
        this.timer =20;
        //explode 64*64 which means takes 4rows and 4cols
        this.blast = {
            up:[], 
            down:[], 
            left:[], 
            right:[],
            frameX:0,
            time:10,

        }      
    }
    static dropBomb(bomb) {
        const bombSprite = new Image();
        bombSprite.addEventListener('load', () => ctx.drawImage(bombSprite,
            bomb.sourceX, bomb.sourceY,
            bomb.width, bomb.height,
            bomb.bombX, bomb.bombY, bomb.width * 2, bomb.height * 2))
        bombSprite.src = 'src/assets/Enemies.png';
    }

    emptyLeftCol(x, y){
        let column = 0
        for(let i = 1; i<= 8; i++){
          
            if (!this.game.map.emptyTile(x-i, y) || !this.game.map.emptyTile(x-i, y+4))return column

            
            column += 1
        }
       return column
    }
    emptyRow(x, y) {
        let row = 0
        for (let i = 0; i < 8; i++) {
            if (!this.game.map.emptyTile(x, y+i)) return row
            row += 1
        }
        return row
    }

    explode() {

        if ( Math.floor(this.blast.frameX) < 3) {     
           this.blast.frameX ++            
        }
        if (this.blast.time > 0) {
            this.boom()                 
            this.blast.time--
        } else {
            this.game.explosion.shift()
        }
    }
    boom(){

        this.drawCenter()
        let leftCol = this.emptyLeftCol(this.col, this.row)
        if(leftCol)this.drawHConnection(leftCol)
        if(leftCol > 4) this.drawLeft(leftCol)
        console.log(leftCol)
     
    }

    fire(frameY,w, h,dX, dY){
        const explosion = new Image();
        console.log(frameY, w, h, dX, dY, this.blast.frameX)
        explosion.addEventListener('load', () => {

            ctx.drawImage(explosion, 64*this.blast.frameX,
                64*frameY, w, h, dX, dY, w,h
            )
        })   
        explosion.src = 'src/assets/bomb.png';
    }

    drawCenter(){
       
        this.fire(1, 64, 64,this.dinoX, this.dinoY)      
    }   

    drawHConnection(col){
        if(col < 4){
            this.fire(2, col*16, 64, (this.col - col) * 16, this.row * 16)
        }else if(col >= 4){
            this.fire(2, 64, 64, (this.col - 4) * 16, this.row * 16)
        }
       
    }
    drawLeft(col){
        if(col < 8){
            Math.floor(this.blast.frameX) > 3 ? this.blast.frameX = 1 - ((col - 4) / 4) : this.blast.frameX += 1- ((col-4)/4)
            this.fire(3, (col-4)*16, 64, (this.col - col) * 16, this.row * 16) 
        }else if(col === 8){
            this.fire(3, 64, 64, (this.col - 8) * 16, this.row * 16) 
        }
            
    }

    drawRight() {
        this.fire(2, (this.col + 4) * 16, this.row*16)
        this.fire(4, (this.col + 8) * 16, this.row*16)
    }
    drawUp() {
        this.fire(5, this.col*16,(this.row - 4) * 16)
        this.fire(6, this.col*16,(this.row - 8) * 16 )
    }
    drawDown() {
        this.fire(5, this.col*16, (this.row + 4) * 16)
        this.fire(7, this.col*16, (this.row + 8) * 16)
    }
}