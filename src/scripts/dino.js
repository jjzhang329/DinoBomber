import Bomb from './bomb';
import MovingObjects from './movingObjects';
import * as lib from "./lib.js";

const STD_KEYMAP = {
    "up": "ArrowUp",
    "left": "ArrowLeft",
    "right": "ArrowRight",
    "down": "ArrowDown",
    "action": "Space"
}

const ALT_KEYMAP = {
    "up": "KeyW",
    "left": "KeyA",
    "right": "KeyD",
    "down": "KeyS",
    "action": "KeyE"
}

class KeyMap {
    constructor(...kwargs) {
        kwargs = {...STD_KEYMAP, ...kwargs}
        this.up     = kwargs["up"]
        this.left   = kwargs["left"]
        this.right  = kwargs["right"]
        this.down   = kwargs["down"]
        this.action = kwargs["action"]
    }
}

export default class Dino extends MovingObjects {
    "use strict";
    constructor(object) {
        object.width = 60;
        object.height = 60;
        super(object);
        this.spriteSheetConfig = new lib.SpriteSheetConfig(0, 0, 24, 28);
        this.keyMap = new KeyMap();
        this.bomb = 0;
        this.game = object.game;
        this.newBomb = [];
        this.walkCycleTimeDelta = 0;
        this.throttledCreateBomb = lib.throttle(this.createBomb, 200);
        //reset width and heigh when moving
    }

    draw(ctx) {
        const dinoSprite = new Image();
        if(this.status === 'burned'){
            this.spriteSheetConfig.sy = 0;
            this.spriteSheetConfig.sWidth = 21;
            this.spriteSheetConfig.sHeight = 29;
            dinoSprite.src = 'src/assets/deadDino.png'
        } else { dinoSprite.src = "src/assets/dinoSprite.png"}
        dinoSprite.addEventListener('load', () =>{
            // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
            ctx.drawImage(
                dinoSprite,
                ...this.spriteSheetConfig.toArgs(),
                this.x, this.y,
                60, 64
            )
        })
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
            this.spriteSheetConfig.sy = 84.97;
            this.spriteSheetConfig.sWidth = 21;
            this.spriteSheetConfig.sHeight = 29;
            moving = true;
        }
        if (key[this.keyMap.left] && this.canMoveLeft(moveAmount)) {
            this.x -= moveAmount;
            this.spriteSheetConfig.sy = 0;
            this.spriteSheetConfig.sWidth = 24;
            this.spriteSheetConfig.sHeight = 28;
            moving = true;
        }
        if (key[this.keyMap.right] && this.canMoveRight(moveAmount)) {
            this.x += moveAmount;
            this.spriteSheetConfig.sy = 28;
            this.spriteSheetConfig.sWidth = 24;
            this.spriteSheetConfig.sHeight = 28;
            moving = true;
        }
        if (key[this.keyMap.down] && this.canMoveDown(moveAmount)) {
            this.y += moveAmount
            this.spriteSheetConfig.sy = 55.97;
            this.spriteSheetConfig.sWidth = 21;
            this.spriteSheetConfig.sHeight = 29;
            moving = true;
        }

        this.moving = moving;
        this.walkCycleTimeDelta += secondsPassed;

        if (key[this.keyMap.action] && this.emptyTile(this.x, this.y)) {
            this.throttledCreateBomb();
        }

        if (this.moving && this.walkCycleTimeDelta >= 0.267) {
            if (this.spriteSheetConfig.sx == 0) {
                this.spriteSheetConfig.sx = this.spriteSheetConfig.sWidth
            } else {
                this.spriteSheetConfig.sx = 0
            }
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
}
