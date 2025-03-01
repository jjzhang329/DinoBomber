import MovingObjects from "./movingObjects";
export default class Enemy extends MovingObjects {
    "use strict";
    static spriteSheet = null;
    static sprites = {
        grey: {
            one: {
                [Enemy.Direction.left]:  { sx:  0, sy:  0, sWidth: 25, sHeight: 27 },
                [Enemy.Direction.right]: { sx:  0, sy: 28, sWidth: 25, sHeight: 27 },
                [Enemy.Direction.down]:  { sx:  0, sy: 56, sWidth: 22, sHeight: 27 },
                [Enemy.Direction.up]:    { sx:  0, sy: 84, sWidth: 22, sHeight: 27 },
            },
            two: {
                [Enemy.Direction.left]:  { sx: 26, sy:  0, sWidth: 27, sHeight: 27 },
                [Enemy.Direction.right]: { sx: 26, sy: 28, sWidth: 27, sHeight: 27 },
                [Enemy.Direction.down]:  { sx: 26, sy: 56, sWidth: 22, sHeight: 27 },
                [Enemy.Direction.up]:    { sx: 26, sy: 84, sWidth: 22, sHeight: 27 },
            },
        },
        red: {
            one: {
                [Enemy.Direction.left]:  { sx: 54, sy:  0, sWidth: 25, sHeight: 27 },
                [Enemy.Direction.right]: { sx: 54, sy: 28, sWidth: 25, sHeight: 27 },
                [Enemy.Direction.down]:  { sx: 54, sy: 56, sWidth: 22, sHeight: 27 },
                [Enemy.Direction.up]:    { sx: 54, sy: 84, sWidth: 22, sHeight: 27 },
            },
            two: {
                [Enemy.Direction.left]:  { sx: 80, sy:  0, sWidth: 27, sHeight: 27 },
                [Enemy.Direction.right]: { sx: 80, sy: 28, sWidth: 27, sHeight: 27 },
                [Enemy.Direction.down]:  { sx: 80, sy: 56, sWidth: 22, sHeight: 27 },
                [Enemy.Direction.up]:    { sx: 80, sy: 84, sWidth: 22, sHeight: 27 },
            },
        }
    }

    constructor(object){
        object.width = 63;
        object.height = 63;
        super(object);
        this.moving = true;
        this.game = object.game;
        this.counter = 4;
        this.changeDirectionTimeDelta = 0;
        this.currentDir = Enemy.Direction.left;
        this.status = true;
        this.skin = object.skin || "grey";
        this.walkCycle = "one";
        this.walkCycleTimeDelta = 0;

        this.updateSprite();
        this.loadSpriteSheet();
    }

    updateSprite() {
        Object.assign(this.spriteSheetConfig, Enemy.sprites[this.skin][this.walkCycle][this.currentDir]);
    }

    loadSpriteSheet() {
        if (Enemy.spriteSheet) return;

        Enemy.spriteSheet = new Image();
        Enemy.spriteSheet.src = "src/assets/soldierAndBomb.png";
    }

    draw(ctx) {
        const dHeight = 64;
        const dWidth = this.spriteSheetConfig.sWidth * (dHeight / this.spriteSheetConfig.sHeight);

        ctx.drawImage(
            Enemy.spriteSheet,
            ...this.spriteSheetConfig.toArgs(),
            this.x, this.y, dWidth, dHeight
        )
    }

    move(secondsPassed) {
        if (this.isDead()) return;

        const moveAmount = Math.round(this.speed * secondsPassed);

        this.changeDirectionTimeDelta += secondsPassed;
        if (this.cannotMove(this.currentDir, moveAmount) || this.changeDirectionTimeDelta >= 0.267) {
            this.currentDir = this.getNextDirection(moveAmount);
            this.changeDirectionTimeDelta = 0;
        }

        switch (this.currentDir) {
        case Enemy.Direction.up:
            this.y -= moveAmount;
            break;
        case Enemy.Direction.down:
            this.y += moveAmount;
            break;
        case Enemy.Direction.left:
            this.x -= moveAmount;
            break;
        case Enemy.Direction.right:
            this.x += moveAmount;
            break;
        }

        this.walkCycleTimeDelta += secondsPassed;
        if (this.walkCycleTimeDelta >= 0.267) {

            if (this.walkCycle === "one") {
                this.walkCycle = "two";
            } else {
                this.walkCycle = "one";
            }
            this.walkCycleTimeDelta = 0;
        }

        this.updateSprite();
    }

    getNextDirection(moveAmount) {
        const moves = this.availableMoves(moveAmount)
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

    availableMoves(moveAmount) {
        const moves = []
        if (this.canMoveUp(moveAmount)) {moves.push(Enemy.Direction.up)}
        if (this.canMoveDown(moveAmount)) {moves.push(Enemy.Direction.down)}
        if (this.canMoveLeft(moveAmount)) {moves.push(Enemy.Direction.left)}
        if (this.canMoveRight(moveAmount)) {moves.push(Enemy.Direction.right)}
        return moves
    }

    isDead() {
        return !this.status;
    }

    isAlive() {
        return this.status;
    }
}
