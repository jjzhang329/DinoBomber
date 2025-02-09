import HitBox from "./hitBox.js";
import * as Lib from "./lib.js";

export default class MovingObjects{
    static Direction = {
        up: 0,
        down: 1,
        left: 2,
        right: 3,
    }

    constructor(object) {
        this.x = object.x;
        this.y = object.y;
        this.width = object.width || 24;
        this.height = object.height || 28;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteSheetConfig = new Lib.SpriteSheetConfig()
        this.speed = 96;
        this.game = object.game;
        this.moving = false;
        this.status = true;
        this.hitBox = new HitBox(this.x, this.y, this.width, this.height);
    }

    canMove(direction, moveAmount) {
        switch (direction) {
        case MovingObjects.Direction.up:
            return this.emptyTile(this.x,              this.y - moveAmount) &&
                   this.emptyTile(this.x + this.width, this.y - moveAmount)
        case MovingObjects.Direction.down:
            return this.emptyTile(this.x,              this.y + this.height + moveAmount) &&
                   this.emptyTile(this.x + this.width, this.y + this.height + moveAmount)
        case MovingObjects.Direction.left:
            return this.emptyTile(this.x - moveAmount, this.y) &&
                   this.emptyTile(this.x - moveAmount, this.y + this.height)
        case MovingObjects.Direction.right:
            return this.emptyTile(this.x + this.width + moveAmount, this.y) &&
                   this.emptyTile(this.x + this.width + moveAmount, this.y + this.height)
        }

        return false
    }

    cannotMove(direction, moveAmount) {
        return !this.canMove(direction, moveAmount)
    }

    canMoveUp(moveAmount) {
        return this.canMove(MovingObjects.Direction.up, moveAmount || 2)
    }

    canMoveDown(moveAmount) {
        return this.canMove(MovingObjects.Direction.down, moveAmount || 2)
    }

    canMoveLeft(moveAmount) {
        return this.canMove(MovingObjects.Direction.left, moveAmount || 2)
    }

    canMoveRight(moveAmount) {
        return this.canMove(MovingObjects.Direction.right, moveAmount || 2)
    }

    emptyTile(x, y){
        let i = this.game.map.getRow(x)
        let j = this.game.map.getCol(y)
        return this.game.map.emptyTile(i, j)
    }
}
