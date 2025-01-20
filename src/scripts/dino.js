import Bomb from './bomb';
import MovingObjects from './movingObjects';

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
    constructor(object) {
        super(object);
        this.width = 24;
        this.height = 28;
        this.keyMap = new KeyMap();
        this.bomb = 0;
        this.game = object.game;
        this.newBomb = [];
        //reset width and heigh when moving
    }

    draw(ctx){
        const dinoSprite = new Image();
        if(this.status === 'burned'){
            this.width = 21;
            this.height = 29;
            dinoSprite.src = 'src/assets/deadDino.png'
        } else { dinoSprite.src = "src/assets/dinoSprite.png"}
        dinoSprite.addEventListener('load', () =>{
            // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
            ctx.drawImage(
                dinoSprite,
                this.width * this.frameX, this.height * this.frameY,
                this.width, this.height,
                this.x, this.y,
                60, 64
            )
        })
    }

    move(key) {
        let moving = false
        if (key[this.keyMap.up] && this.canMoveUp()) {
            this.y -= this.speed;
            this.width = 21;
            this.height = 29;
            this.frameY = 2.93;
            moving = true;
        }
        if (key[this.keyMap.left] && this.canMoveLeft()) {
            this.x -= this.speed;
            this.width = 24;
            this.height = 28;
            this.frameY = 0;
            moving = true;
        }
        if (key[this.keyMap.right] && this.canMoveRight()) {
            this.x += this.speed;
            this.width = 24;
            this.height = 28;
            this.frameY = 1;
            moving = true;
        }
        if (key[this.keyMap.down] && this.canMoveDown()) {
            this.y += this.speed
            this.width = 21;
            this.height = 29;
            this.frameY = 1.93;
            moving = true;
        }

        this.moving = moving

        if (key[this.keyMap.action] && this.emptyTile(this.x, this.y)) {
            this.newBomb.push(new Bomb(this.x, this.y, this.game));
            this.bomb += 1;
        }
    }

    clearBomb(bomb) {
        if(bomb.timer === 0){
            this.game.explosion.push(bomb)
            // bomb.explode()
            let idx = this.game.map.getIndex(bomb.bombX, bomb.bombY)
            this.game.map.tiles[idx] = 0;
            this.newBomb.shift();
            this.bomb -= 1;
        } else(bomb.timer--)
    }
}
