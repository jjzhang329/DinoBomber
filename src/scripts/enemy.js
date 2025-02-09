import MovingObjects from "./movingObjects";
import * as Lib from "./lib.js";
export default class Enemy extends MovingObjects {
    static spriteSheet = null;

    constructor(object){
        object.width = 63;
        object.height = 63;
        super(object);
        this.spriteSheetConfig = new Lib.SpriteSheetConfig(0, 0, 25, 28);
        this.moving = true;
        this.game = object.game;
        this.counter = 4;
        this.currentDir = 2;

        this.loadSpriteSheet();
    }

    loadSpriteSheet() {
        if (Enemy.spriteSheet) return;

        Enemy.spriteSheet = new Image();
        Enemy.spriteSheet.src = "src/assets/soldierAndBomb.png";
    }

    draw(ctx) {
        ctx.drawImage(
            Enemy.spriteSheet,
            ...this.spriteSheetConfig.toArgs(),
            this.x, this.y, 60, 64
        )
    }

    randomMove(secondsPassed) {
        const nextDir = this.getNextDirection()
        const moveAmount = Math.round(this.speed * secondsPassed);

        if (this.cannotMove(nextDir, moveAmount)) return

        this.currentDir = nextDir

        switch (this.currentDir) {
        case Enemy.Direction.up:
            this.y -= moveAmount;
            this.spriteSheetConfig.sy = 84;
            this.spriteSheetConfig.sWidth = 22;
            break;
        case Enemy.Direction.down:
            this.y += moveAmount;
            this.spriteSheetConfig.sy = 56;
            this.spriteSheetConfig.sWidth = 22;
            break;
        case Enemy.Direction.left:
            this.x -= moveAmount;
            this.spriteSheetConfig.sy = 0;
            this.spriteSheetConfig.sWidth = 25;
            break;
        case Enemy.Direction.right:
            this.x += moveAmount;
            this.spriteSheetConfig.sy = 28;
            this.spriteSheetConfig.sWidth = 26;
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
        if (this.canMoveUp(2)) {moves.push(Enemy.Direction.up)}
        if (this.canMoveDown(2)) {moves.push(Enemy.Direction.down)}
        if (this.canMoveLeft(2)) {moves.push(Enemy.Direction.left)}
        if (this.canMoveRight(2)) {moves.push(Enemy.Direction.right)}
        return moves
    }
}
