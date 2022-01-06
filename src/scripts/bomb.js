
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
        this.src= 'src/assets/Enemies.png';   
        this.timer =30;
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
    explode() {

        if (this.blast.frameX < 3) {
            Math.floor(this.blast.frameX++)
        }

        if (this.blast.time > 0) {
            this.drawCenter()
            this.drawExplosionUp()
            this.drawExplosionDown()
            this.drawExplosionLeft()          
            this.drawExplosionRight()
            this.blast.time--
        } else {
            this.game.explosion.shift()
        }

    }
    fire(frameY, w, h, dX, dY){
        // console.log(64 * this.frameX,
        //     64 * frameY, w, h, dX, dY, w, h)
        const explosion = new Image();
        explosion.addEventListener('load', () => {
            ctx.drawImage(explosion, 64*this.blast.frameX,
                64*frameY, w, h, dX, dY, w, h
            )
        })   
        explosion.src = 'src/assets/bomb.png';
    }
    drawCenter(){
        let x = this.game.map.getRow(this.dinoX)*16
        let y = this.game.map.getCol(this.dinoY)*16
        this.fire(1,64,64, x, y)
        if (this.game.collision({ x: x, y: y, width: 64, height: 64 }, this.game.dino)) {
            this.game.end = true
            this.game.dino.status = 'burned'
        }
      
    }
    drawExplosionLeft(){
        //takes in this.blast.left
        let left = this.blast.left;
        if(left[0].length < 4)return;
        let cols = left.length;
        
        //how many rows available in the last cols
        let rows = left[cols-1].length
        let frameY = 1
        if (cols >= 4){
            //take the xy on the 4 column, draw frame1 fullsize
            let dX = (left[3][0][0] + 1)*16
            let dY = (left[3][0][1])*16
            let w = 64;
            let h = 64
            this.fire(2, w, h, dX, dY);//drawing connection piece
            if(this.game.collision({x:dX, y:dY, width:w, height:h}, this.game.dino))
            {this.game.end = true;
                this.game.dino.status = 'burned'}
            //take the xy on last col, draw frame2
            dX = (left[cols-1][0][0]+1)*16;
            dY = (left[cols - 1][0][1])*16;
            w = (cols-4)*16
            h = rows*16
            //if we have 7cols in total, then we crop from (0, 64*2)
            this.frameX += ((4 - (cols - 4))*16)/64
            frameY += (rows/4+1)     
            this.fire(frameY, w, h, dX, dY);//drawing left end
            if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino))
             { this.game.end = true 
                this.game.dino.status = 'burned'}
        } else {
            //only need to draw frame1
 
            let dX = (left[cols - 1][0][0]+1) * 16;
            let dY = (left[cols - 1][0][1]) * 16;
            let w = (4-cols) * 16
            let h = rows * 16
            this.frameX += ((4 - (4-cols)) * 16) / 64
            frameY += (rows / 4)
            this.fire(frameY, w, h, dX, dY);
            if (this.game.collision({ x: dX, y: dY, width: w, height: h}, this.game.dino)) 
            {this.game.end = true
                this.game.dino.status = 'burned'}//drawing connection
        };   
      
    }

    drawExplosionRight() {      

        //takes in this.blast.left
        let right = this.blast.right;
        if(right[0].length < 4){return}
        let cols = right.length;
        //how many rows available in the last cols
        let rows = right[cols - 1].length    
        let frameY = 1
        if (cols >= 4) {      
            let dX = (right[0][0][0]) * 16
            let dY = (right[0][0][1]) * 16
            let w = 64;
            let h = 64;
            this.fire(2, w, h, dX, dY);//drawing connection piece
            if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino)) 
            { this.game.end = true 
                this.game.dino.status = 'burned'}
            //take the xy on last col, draw frame2
            dX = (right[cols-4][0][0]) * 16;
            dY = (right[cols-4][0][1]) * 16;
            w = (cols - 4) * 16
            h = rows * 16
            
            this.frameX += ((4 - (cols - 4)) * 16) / 64
            frameY += (rows/4+2)
         
            this.fire(frameY, w, h, dX, dY);
            if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino))
             { this.game.end = true 
                this.game.dino.status = 'burned'}//drawing left end
        } else {
            //only need to draw frame1
            let dX = (right[0][0][0]) * 16;
            let dY = (right[0][0][1])* 16;
            let w = cols*16
            let h = rows * 16
            this.frameX += ((4 - (4-cols)) * 16) / 64
            frameY += (rows/4)
            this.fire(frameY, w, h, dX, dY);//drawing connection
            if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino))
             { this.game.end = true 
                this.game.dino.status = 'burned'}
        };
      

    }
    drawExplosionUp() {
       
       
        let dinoRow = this.game.map.getRow(this.dinoY)
        //takes in this.blast.left
        let up = this.blast.up;
        if (!up.length) return;
        let cols = up.length;
        let rows = up[cols - 1].length
        
        if (dinoRow - up[0][0][1] > 1) {        
            rows = dinoRow - up[0][0][1] - 1 
            return
        }
        if (up[cols - 1][0][1] < up[0][0][1]) {
            rows = up[0][0][1] - up[cols - 1][0][1]
            return;
        } 
        //how many rows available in the last cols
        let frameY = 5
        if (rows >= 4) {         
            let dX = (up[0][3][0]) * 16
            let dY = (up[0][3][1]) * 16
            let w = 64;
            let h = 64;       
            this.fire(5, w, h, dX, dY);
            if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino)) 
            { this.game.end = true 
                this.game.dino.status = 'burned'}//drawing connection piece
           
            if(rows > 4){            
                dX = (up[0][rows-1][0]) * 16;
                dY = (up[0][rows-1][1]) * 16;
                w = cols * 16
                h = (rows-4) * 16
                frameY += ((rows/4) -1)
                this.fire(frameY, w, h, dX, dY)
                if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino)) 
                { this.game.end = true 
                    this.game.dino.status = 'burned'}
            }
            ;//drawing upper end
        } else {
           
          
            let dX = (up[0][rows-1][0]) * 16;
            let dY = (up[0][rows-1][1]+rows) * 16;
            let w = cols * 16
            let h = rows * 16
            frameY += rows/4
            this.fire(frameY, w, h, dX, dY);
            if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino)) 
            { this.game.end = true 
                this.game.dino.status = 'burned'}
            //drawing connection
        };

    }
    drawExplosionDown() {
        let down = this.blast.down;
        let cols = down.length;
       if(!down.length)return;
        let dinoCol = this.game.map.getRow(this.dinoY)
        let rows = down[cols - 1].length
        if (down[0][0][1] - dinoCol > 4) {
            rows = down[0][0][1] - dinoCol - 4
            return;
        }
        let frameY = 5

        if (rows >= 4) {
            let dX = (down[0][0][0]) * 16
            let dY = (down[0][0][1]) * 16
            let w = 64;
            let h = 64;
            this.fire(5, w, h, dX, dY);
            if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino)) 
            { this.game.end = true 
                this.game.dino.status = 'burned'}//drawing connection piece
            //take the xy on last col, draw frame2
            
            if(rows > 4){
                h = (rows - 4)*16
                dX = (down[4][0][0]) * 16;
                dY = (down[4][0][1]) * 16;
                w = cols * 16
                frameY += (((rows - 4) / 4) + 2) 
                this.fire(frameY, w, h, dX, dY)
                if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino)) 
                { this.game.end = true 
                    this.game.dino.status = 'burned'}//drawing down end
            }
           
    
            
        } else {
            if (down[cols - 1][0][1] > down[0][0][1]) {
                rows = down[cols - 1][0][1]-down[0][0][1]
            }  
           
            let dX = (down[0][0][0]) * 16;
            let dY = (down[0][0][1]-rows) * 16;
            let w = cols * 16
            let h = rows * 16
            // this.frameX += ((4 - (4 - cols)) * 16) / 64
            frameY += (rows/4)
   
            this.fire(frameY, w, h, dX, dY);
            if (this.game.collision({ x: dX, y: dY, width: w, height: h }, this.game.dino)) 
            { this.game.end = true 
                this.game.dino.status = 'burned'}//drawing connection
        };

    }

    boom(){
    
      this.blastLeft()
      this.blastRight()
      this.blastUp()
      this.blastDown()

      
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
            if (!numleft.length) { break } 
            this.blast.left.push(numleft)
           if(numleft.length < 4){break}        
        }
    }

    blastRight() {
        let row = this.game.map.getRow(this.dinoY);
        let col = this.game.map.getCol(this.dinoX)+4;
        for (let i = 0; i < 8; i++) {
            let numRight = []
            for (let j = 0; j < 4; j++) {
                if (this.game.map.emptyTile(col+i, row + j)) {
                    numRight.push([col + i, row + j])
                }
            }
            if (!numRight.length) { break } 
            this.blast.right.push(numRight)
            if (numRight.length < 4) { break } 
        }
    }

    blastUp() {
        let row = this.game.map.getRow(this.dinoY);
        let col = this.game.map.getCol(this.dinoX);
        for (let i = 0; i < 4; i++) {
            let numUp = []
            for (let j = 1; j <= 8; j++) {
                if (this.game.map.emptyTile(col + i, row - j)) {
                    numUp.push([col + i, row - j])
                }             
            }
            if (!numUp.length) { break } 
            this.blast.up.push(numUp)
            if (numUp.length <= 4) { break } 
        }
    }

    blastDown() {
        let row = this.game.map.getRow(this.dinoY)+4;
        let col = this.game.map.getCol(this.dinoX);
        for (let i = 0; i < 4; i++) {
            let numDown = []
            for (let j =0; j < 8; j++) {
                if (this.game.map.emptyTile(col + i, row+j)){
                    numDown.push([col + i, row + j])
                }
            }
            if (!numDown.length) { break } 
          this.blast.down.push(numDown)
            if (numDown.length <= 4) { break }
        }
    }





}