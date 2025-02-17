import MovingObjects from "./movingObjects";
export default class Enemy extends MovingObjects {
    "use strict";
    static spriteSheet = null;
    static sprites = {
        grey: {
            initial: { sx: 0, sy: 0, sWidth: 25, sHeight: 28 },
            up:    { sy: 84, sWidth: 22 },
            down:  { sy: 56, sWidth: 22 },
            left:  { sy:  0, sWidth: 25 },
            right: { sy: 28, sWidth: 26 },
        },
        red: {
            initial: { sx: 54, sy: 0, sWidth: 25, sHeight: 28 },
            up:    { sy: 84, sWidth: 22 },
            down:  { sy: 56, sWidth: 22 },
            left:  { sy:  0, sWidth: 25 },
            right: { sy: 28, sWidth: 26 },
        }
    }

    constructor(object){
        object.width = 63;
        object.height = 63;
        super(object);
        this.moving = true;
        this.game = object.game;
        this.counter = 4;
        this.currentDir = 2;
        this.status = true;
        this.skin = object.skin || "grey";
        this.walkCycleTimeDelta = 0;

        Object.assign(this.spriteSheetConfig, Enemy.sprites[this.skin].initial)

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
        if (this.isDead()) return;
        const nextDir = this.getNextDirection()
        const moveAmount = Math.round(this.speed * secondsPassed);

        if (this.cannotMove(nextDir, moveAmount)) return

        this.currentDir = nextDir

        switch (this.currentDir) {
        case Enemy.Direction.up:
            this.y -= moveAmount;
            Object.assign(this.spriteSheetConfig, Enemy.sprites[this.skin].up);
            break;
        case Enemy.Direction.down:
            this.y += moveAmount;
            Object.assign(this.spriteSheetConfig, Enemy.sprites[this.skin].down);
            break;
        case Enemy.Direction.left:
            this.x -= moveAmount;
            Object.assign(this.spriteSheetConfig, Enemy.sprites[this.skin].left);
            break;
        case Enemy.Direction.right:
            this.x += moveAmount;
            Object.assign(this.spriteSheetConfig, Enemy.sprites[this.skin].right);
            break;
        }

        this.walkCycleTimeDelta += secondsPassed;

        if (this.walkCycleTimeDelta >= 0.267) {
            if (this.spriteSheetConfig.sx === 0) {
                this.spriteSheetConfig.sx = this.spriteSheetConfig.sWidth;
            } else {
                this.spriteSheetConfig.sx = 0;
            }
            this.walkCycleTimeDelta = 0;
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

    isDead() {
        return !this.status;
    }

    isAlive() {
        return this.status;
    }
}
