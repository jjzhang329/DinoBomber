import MovingObjects from "./movingObjects";
export default class Enemy extends MovingObjects {
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

    draw(ctx) {
        const enemySprite = new Image();
        enemySprite.addEventListener('load', ()=>{
            ctx.drawImage(enemySprite, this.width * this.frameX, this.height * this.frameY,
                this.width, this.height,
                this.x, this.y, 60, 64)
        })
        enemySprite.src = 'src/assets/soldierAndBomb.png'
    }

    randomMove() {
        const nextDir = this.getNextDirection()

        if (this.cannotMove(nextDir)) return

        this.currentDir = nextDir

        switch (this.currentDir) {
        case Enemy.Direction.up:
            this.y -= this.speed;
            this.width = 22;
            // this.height = 27;
            this.frameY = 3;
            break;
        case Enemy.Direction.down:
            this.y += this.speed;
            this.width = 22;
            // this.height = 27;
            this.frameY = 2;
            break;
        case Enemy.Direction.left:
            this.x -= this.speed;
            this.width = 25;
            // this.height = 27;
            this.frameY = 0;
            break;
        case Enemy.Direction.right:
            this.x += this.speed;
            this.width = 26;
            // this.height = 27;
            this.frameY = 1;
            break;
        }
    }

    getNextDirection() {
        const moves = this.availableMoves()
        if (this.counter === 0) {
           this.counter = 4
           return moves[this.getRandomInt(0, moves.length)]
        } else {
           this.counter -= 1
           return this.currentDir
        }
    }

   getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        //The maximum is exclusive and the minimum is inclusive
    }

    availableMoves() {
        const moves = []
        if (this.canMoveUp()) {moves.push(Enemy.Direction.up)}
        if (this.canMoveDown()) {moves.push(Enemy.Direction.down)}
        if (this.canMoveLeft()) {moves.push(Enemy.Direction.left)}
        if (this.canMoveRight()) {moves.push(Enemy.Direction.right)}
        return moves
    }
}
