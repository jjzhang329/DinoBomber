
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
        this.timer =15;
        //explode 64*64 which means takes 4rows and 4cols
        this.blast = {

            frameX:0,
            time:5,

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
            if (!this.game.map.emptyTile(x-i, y) || !this.game.map.emptyTile(x-i, y+3))return column
            column += 1
            if([this.game.dino.x+48, this.game.dino.y].toString() === [(x-i)*16, y*16].toString()){
                this.game.dino.status = 'burned'
                this.game.end = true
            } else if ([this.game.enemy.x+48, this.game.enemy.y].toString() === [(x - i) * 16, y * 16].toString()) {
                this.game.enemy.status = false
                this.game.end = true
            }
        }
       return column
    }
    emptyRightCol(x, y) {
        let column = 0
        for (let i = 1; i <= 8; i++) {
            if (!this.game.map.emptyTile(x + i, y) || !this.game.map.emptyTile(x + i, y+3)) return column
            column += 1
            if ([this.game.dino.x+16, this.game.dino.y].toString() === [(x + i) * 16, y * 16].toString()) {
                this.game.dino.status = 'burned'
                this.game.end = true
            } else if ([this.game.enemy.x+16, this.game.enemy.y].toString() === [(x + i) * 16, y * 16].toString()) {
                this.game.enemy.status = false
                this.game.end = true
            }
        }
        return column
    }
    emptyUpRow(x, y) {
        let row = 0
        for (let i = 1; i <= 8; i++) {
            if (!this.game.map.emptyTile(x, y-i)|| !this.game.map.emptyTile(x+3, y-i)) return row
                row += 1
            if ([this.game.dino.x, this.game.dino.y+62].toString() === [x * 16, (y-i) * 16].toString()) {
                this.game.dino.status = 'burned'
                this.game.end = true
            } else if ([this.game.enemy.x, this.game.enemy.y+62].toString() === [x*16, (y-i) * 16].toString()) {
                this.game.enemy.status = false
                this.game.end = true
            }
        }
        return row
    }
    emptyDownRow(x, y) {
        let row = 0
        for (let i = 1; i <= 8; i++) {
           console.log(this.game.dino.y+2, (y+i)*16)
            if (!this.game.map.emptyTile(x, y+i) || !this.game.map.emptyTile(x+3, y+i)) return row
            row += 1
            if ([this.game.dino.x, this.game.dino.y+2].toString() === [x * 16, (y + i) * 16].toString()) {
                this.game.dino.status = 'burned'
                this.game.end = true
            } else if ([this.game.enemy.x, this.game.enemy.y+2].toString() === [x * 16, (y + i) * 16].toString()) {
                this.game.enemy.status = false
                this.game.end = true
            }

        }

        return row
    }


    explode() {

        if ( Math.floor(this.blast.frameX) < 3) {
           this.blast.frameX += 1
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
        if(leftCol)this.drawLeftConnection(leftCol)
        if(leftCol > 4) this.drawLeft(leftCol)
        let rightCol = this.emptyRightCol(this.col+3, this.row)
        if(rightCol)this.drawRightConnection(rightCol)
        if(rightCol > 4)this.drawRight(rightCol)
        let upRow = this.emptyUpRow(this.col,this.row)
        if(upRow)this.drawUpConnection(upRow)
        if(upRow > 4)this.drawUp(upRow)
        let downRow = this.emptyDownRow(this.col, this.row+4)
        if(downRow)this.drawDownConnection(downRow)
        if(downRow > 4)this.drawDown(downRow)

    }

    fire(frameY, w, h, dX, dY,ratio=0){

        const explosion = new Image();
        // console.log(frameY, w, h, dX, dY, this.blast.frameX, ratio)
        explosion.addEventListener('load', () => {

            ctx.drawImage(explosion, 64*(this.blast.frameX+ratio),
                64*frameY, w, h, dX, dY, w,h
            )
        })
        explosion.src = 'src/assets/bomb.png';
    }

    drawCenter(){

        this.fire(1, 64, 64,this.dinoX, this.dinoY)
    }

    drawLeftConnection(col){
        if(col < 4){
            this.fire(2, col*16, 64, (this.col - col) * 16, this.row * 16)
        }else if(col >= 4){
            this.fire(2, 64, 64, (this.col - 4) * 16, this.row * 16)
        }
    }
    drawLeft(col) {
        if (col < 8) {
            let ratio = 1 - ((col - 4) / 4)
            this.fire(3, (col - 4) * 16, 64, (this.col - col) * 16, this.row * 16, ratio)
        } else if (col === 8) {
            this.fire(3, 64, 64, (this.col - 8) * 16, this.row * 16)
        }
    }
    drawRightConnection(col) {
        if (col < 4) {
            this.fire(2, col * 16, 64, (this.col+ col-1) * 16, this.row * 16)
        } else if (col >= 4) {
            this.fire(2, 64, 64, (this.col+3) * 16, this.row * 16)
        }
    }

    drawRight(col){
        if (col < 8) {
            this.fire(4, (col - 4) * 16, 64, (this.col+7) * 16, this.row * 16)
        } else if (col === 8) {
            this.fire(4, 64, 64, (this.col+7) * 16, this.row * 16)
        }
    }

    drawUpConnection(row){
        if(row < 4){
            this.fire(5, 64, row*16, this.col*16, (this.row - row)*16)
        }else if (row >= 4){
            this.fire(5, 64, 64, this.col*16, (this.row-4)*16)
        }
    }

    drawUp(row) {
        console.log(row)
        if(row < 8){
            let y = 7- (row-4)/4
            this.fire(y, 64, (row-4)*16, this.col*16, (this.row-row)*16)
        }else if (row === 8){
            this.fire(6,64,64,this.col*16,(this.row-8)*16)
        }
    }
    drawDownConnection(row){
        if (row < 4) {
            this.fire(5, 64, row * 16, this.col * 16, (this.row + row) * 16)
        } else if (row >= 4) {
            this.fire(5, 64, 64, this.col * 16, (this.row + 4) * 16)
        }
    }
    drawDown(row) {
        if (row < 8) {
            this.fire(7,64, (row-4)*16, this.col*16, (this.row+8)*16)
        } else if (row === 8) {
            this.fire(7, 64, 64, this.col*16, (this.row+8)*16)
        }

    }
}
