import Bomb from './bomb';
import MovingObjects from './movingObjects';
import * as lib from "./lib.js";

export default class Dino extends MovingObjects {
    "use strict";
    static spriteSheet = null;
    static sprites = {
        one: {
            [Dino.Direction.left]:  { sx:  0, sy:  0, sWidth: 24, sHeight: 28 },
            [Dino.Direction.right]: { sx:  0, sy: 29, sWidth: 24, sHeight: 28 },
            [Dino.Direction.down]:  { sx:  0, sy: 58, sWidth: 21, sHeight: 29 },
            [Dino.Direction.up]:    { sx:  0, sy: 88, sWidth: 21, sHeight: 29 },
        },
        two: {
            [Dino.Direction.left]:  { sx: 25, sy:  0, sWidth: 24, sHeight: 28 },
            [Dino.Direction.right]: { sx: 25, sy: 29, sWidth: 24, sHeight: 28 },
            [Dino.Direction.down]:  { sx: 25, sy: 58, sWidth: 21, sHeight: 29 },
            [Dino.Direction.up]:    { sx: 25, sy: 88, sWidth: 21, sHeight: 29 },
        },
        burned: {
            one: { sx:  0, sy: 118, sWidth: 21, sHeight: 29 },
            two: { sx: 26, sy: 118, sWidth: 21, sHeight: 29 },
        }
    }

    constructor(object) {
        object.width = 60;
        object.height = 60;
        super(object);
        this.keyMap = object.keyMap || lib.STD_KEYMAP;
        this.bomb = 0;
        this.game = object.game;
        this.playerName = object.playerName || "Player 1"
        this.newBomb = [];
        this.throttledCreateBomb = lib.throttle(this.createBomb, 200);

        this.updateSprite();
        this.loadSpriteSheet();
    }

    updateSprite() {
        const sData = this.status === "burned" ?
            Dino.sprites.burned[this.walkCycle] :
            Dino.sprites[this.walkCycle][this.direction];

        Object.assign(this.spriteSheetConfig, sData)
    }

    loadSpriteSheet() {
        if (Dino.spriteSheet) return;

        Dino.spriteSheet = new Image();
        Dino.spriteSheet.src = "src/assets/dinoSprite.png";
    }

    draw(ctx) {
        this.updateSprite();

        // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
        ctx.drawImage(
            Dino.spriteSheet,
            ...this.spriteSheetConfig.toArgs(),
            this.x, this.y,
            60, 64
        )

        ctx.font = "16px sans-serif";
        ctx.textAlign = "center"
        ctx.fillText(this.playerName, this.x + 28, this.y - 20);
    }

    createBomb() {
        this.newBomb.push(new Bomb(this.x, this.y, this.game));
        this.bomb += 1;
    }

    move(key, secondsPassed) {
        let moving = false;
        const moveAmount = Math.round(this.speed * secondsPassed);

        if (key[this.keyMap.up] && this.canMoveUp(moveAmount)) {
            this.y -= moveAmount;
            this.direction = Dino.Direction.up;
            moving = true;
        }
        if (key[this.keyMap.left] && this.canMoveLeft(moveAmount)) {
            this.x -= moveAmount;
            this.direction = Dino.Direction.left;
            moving = true;
        }
        if (key[this.keyMap.right] && this.canMoveRight(moveAmount)) {
            this.x += moveAmount;
            this.direction = Dino.Direction.right;
            moving = true;
        }
        if (key[this.keyMap.down] && this.canMoveDown(moveAmount)) {
            this.y += moveAmount
            this.direction = Dino.Direction.down;
            moving = true;
        }

        this.moving = moving;
        this.walkCycleTimeDelta += secondsPassed;

        if (key[this.keyMap.action] && this.emptyTile(this.x, this.y)) {
            this.throttledCreateBomb();
        }

        if (this.moving && this.walkCycleTimeDelta >= 0.267) {
            this.walkCycle = this.walkCycle === "one" ? "two" : "one";
            this.walkCycleTimeDelta = 0;
        }
    }

    clearBomb(bomb, secondsPassed) {
        if(bomb.timer <= 0){
            this.game.explosion.push(bomb)
            let idx = this.game.map.getIndex(bomb.bombX, bomb.bombY)
            this.game.map.tiles[idx] = 0;
            this.newBomb.shift();
            this.bomb -= 1;
        } else {
            bomb.timer -= secondsPassed;
        }
    }

    isAlive() {
        this.status == true;
    }
}
