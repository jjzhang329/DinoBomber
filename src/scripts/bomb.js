
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class BombHitBox {
    // Attributes mirror CanvasRenderingContext2D rect()
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    checkHit(x, y) {
        const minX = Math.min(this.x, this.x + this.width);
        const maxX = Math.max(this.x, this.x + this.width);

        const minY = Math.min(this.y, this.y + this.height);
        const maxY = Math.max(this.y, this.y + this.height);

        return minX <= x && x <= maxX && minY <= y && y <= maxY
    }

    checkHitEntity(entity) {
        return this.checkHit(entity.x, entity.y) ||
        this.checkHit(entity.x + entity.width, entity.y + entity.height)
    }
}
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
        this.timer = 1.5;
        //explode 64*64 which means takes 4rows and 4cols
        this.blast = {
            frameX: 0,
            time: 0.5,
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

    emptyLeftCol(x, y) {
        let column = 0
        for(let i = 1; i<= 8; i++){
            if (!this.game.map.emptyTile(x-i, y) || !this.game.map.emptyTile(x-i, y+3)) return column

            column += 1
        }
        return column
    }

    emptyRightCol(x, y) {
        let column = 0
        for (let i = 1; i <= 8; i++) {
            if (!this.game.map.emptyTile(x + i, y) || !this.game.map.emptyTile(x + i, y+3)) return column

            column += 1
        }
        return column
    }

    emptyUpRow(x, y) {
        let row = 0
        for (let i = 1; i <= 8; i++) {
            if (!this.game.map.emptyTile(x, y-i)|| !this.game.map.emptyTile(x+3, y-i)) return row

            row += 1
        }
        return row
    }

    emptyDownRow(x, y) {
        let row = 0
        for (let i = 1; i <= 8; i++) {
            if (!this.game.map.emptyTile(x, y+i) || !this.game.map.emptyTile(x+3, y+i)) return row

            row += 1
        }
        return row
    }

    process(secondsPassed) {
        // console.log("processing bomb...")
        if ( Math.floor(this.blast.frameX) < 3) {
           this.blast.frameX += 1
        }
        if (this.blast.time > 0) {
            this.drawAndCheckCollisions()
            this.blast.time -= secondsPassed;
        } else {
            this.game.explosion.shift()
        }
    }

    drawAndCheckCollisions() {
        // console.log("drawAndCheckCollisions bomb...")
        this.drawCenter();

        const leftCol = this.emptyLeftCol(this.col, this.row);
        if (leftCol) this.drawLeftConnection(leftCol);
        if (leftCol > 4) this.drawLeft(leftCol);

        this.checkEntityCollisions(new BombHitBox(this.col * 16, this.row * 16, leftCol * -16, 64));

        const rightCol = this.emptyRightCol(this.col + 3, this.row)
        if (rightCol) this.drawRightConnection(rightCol);
        if (rightCol > 4) this.drawRight(rightCol);

        this.checkEntityCollisions(new BombHitBox(this.col * 16, this.row * 16, rightCol * 16, 64));

        const upRow = this.emptyUpRow(this.col, this.row)
        if (upRow) this.drawUpConnection(upRow);
        if (upRow > 4) this.drawUp(upRow);

        this.checkEntityCollisions(new BombHitBox(this.col * 16, this.row * 16, 64, upRow * -16));

        const downRow = this.emptyDownRow(this.col, this.row + 4);
        if (downRow) this.drawDownConnection(downRow);
        if (downRow > 4) this.drawDown(downRow);

        this.checkEntityCollisions(new BombHitBox(this.col * 16, this.row * 16, 64, downRow * 16));
    }

    checkEntityCollisions(hitBox) {
        if (hitBox.checkHitEntity(this.game.dino)) {
            this.game.dino.status = 'burned'
            this.game.end = true
            return;
        }

        let allEnemiesDefeated = true;
        this.game.enemies.forEach(enemy => {
            if (hitBox.checkHitEntity(enemy)) enemy.status = false;
            if (enemy.isAlive()) allEnemiesDefeated = false;
        })

        if (allEnemiesDefeated) this.game.end = true;
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
