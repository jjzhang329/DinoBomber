const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
export default class Bomb{
    constructor(x, y, game){
        //x, y is the previous bomb location when space pressed
        this.dinoX = x;
        this.dinoY = y;
        this.bombX = this.dinoX+8;
        this.bombY = this.dinoY+20;
        this.game = game;
        this.width= 16;
        this.height= 18;
        this.sourceX= 0;
        this.sourceY= 162;
        this.src= 'src/assets/enemies.png';   
        this.timer =30;
        //explode 64*64 which means takes 4rows and 4cols
        this.blast = {
            up:[], 
            down:[], 
            left:[], 
            right:[],
            frameX:0,
            time:5,

        }
       
    }
    drawExplosion(frameX, frameY, bomblengthX, bomblengthY){
        const explosion = new Image();
        console.log([this.dinoX, this.dinoY])
        explosion.addEventListener('load', ()=>{
            ctx.drawImage(explosion, 0,
                64*frameY, 64, 64, this.dinoX + bomblengthX,
                this.dinoY+bomblengthY, 64, 64
            )}
      
        )
        explosion.src = 'src/assets/bomb.png';
    }
   
   explode(){      
        if (this.blast.frameX < 3) {
            this.blast.frameX++
        }
        
       
       if (this.blast.time > 0) {
            this.blast.time--
           if (this.blast.left.length){
           let bomblengthX = -16* this.blast.left.length 
              let frameY = this.blast.left.length / 4 
              for(let i =1; i<= frameY; i++){
                  this.drawExplosion(this.blast.frameX, i, bomblengthX, 0)
              }
           }
        //    if (this.blast.right.length) {
        //        bomblengthX =  this.blast.right.length
        //        this.drawExplosion(this.blast.frameX, 2, bomblengthX, this.dinoY, 64, 64)
        //    }

           
        }else{
            this.game.explosion.shift()
        
        }
        
    }

    static dropBomb(bomb){
        const bombSprite = new Image();
        bombSprite.addEventListener('load', () => ctx.drawImage(bombSprite,
            bomb.sourceX, bomb.sourceY,
            bomb.width,bomb.height,
            bomb.bombX, bomb.bombY, bomb.width * 2, bomb.height * 2))
        bombSprite.src = 'src/assets/enemies.png';
        

    }
    
    draw(){
        if(this.blast.left.length){
            //length of array = number of empty columns to the left 
            this.blast.frameY = 2; 
            this.bombX = this.blast.left.length/16
        }
    }

    blastZone(){
      this.blastLeft()
    }
    

    blastLeft(){
         let row = this.game.map.getRow(this.dinoY);
         let col = this.game.map.getCol(this.dinoX);
       
        for(let i=1; i<=8; i++){
            let numleft = []
            for(let j=0; j<4; j++){
             
                if(this.game.map.emptyTile(col-i, row+j)){
                    
                    numleft.push([col-i, row+j])
                }
            }
            if (numleft.length < 4)break;
            this.blast.left.push(numleft)
        }
        // return this.blast.left;
    }

    blastRight() {
        let row = this.game.map.getRow(this.dinoY);
        let col = this.game.map.getCol(this.dinoX)+4;
        for (let i = 0; i < 8; i++) {
            let numleft = []
            for (let j = 0; j < 4; j++) {
                if (this.game.map.emptyTile(col+i, row + j)) {
                    numleft.push([col + i, row + j])
                }
            }
           this.blast.right.push(numleft)
        }
        return this.blast.right;
    }

    blastUp() {
        let row = this.game.map.getRow(this.dinoY);
        let col = this.game.map.getCol(this.dinoX);
        for (let i = 0; i < 4; i++) {
            let numleft = []
            for (let j = 1; j <= 8; j++) {
                if (this.game.map.emptyTile(col + i, row - j)) {
                    numleft.push([col + i, row - j])
                }
               
            }
            this.blast.up.push(numleft)
        }
        return this.blast.up;
    }

    blastDown() {
        let row = this.game.map.getRow(this.dinoY)+4;
        let col = this.game.map.getCol(this.dinoX);
        for (let i = 0; i < 4; i++) {
            let numleft = []
            for (let j =0; j < 8; j++) {
                if (this.game.map.emptyTile(col + i, row+j)){
                    numleft.push([col + i, row + j])
                }
            }
          this.blast.down.push(numleft)
        }
        return this.blast.down;
    }





}