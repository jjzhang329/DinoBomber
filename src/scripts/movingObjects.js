export default class MovingObjects{
    static Direction = {
        up: 0,
        down: 1,
        left: 2,
        right: 3,
    }

    constructor(object){
        this.x = object.x;
        this.y = object.y;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 16;
        this.game = object.game;
        this.moving = false;
        this.status = true;
    }

    canMove(direction) {
        let i = this.game.map.getRow(this.y)
        let j = this.game.map.getCol(this.x)

        switch (direction) {
        case MovingObjects.Direction.up:
            return this.game.map.emptyTile(j, i-1) && this.game.map.emptyTile(j+3, i-1)
        case MovingObjects.Direction.down:
            return this.game.map.emptyTile(j, i+4) && this.game.map.emptyTile(j+3, i+4)
        case MovingObjects.Direction.left:
            return this.game.map.emptyTile(j-1, i) && this.game.map.emptyTile(j-1, i+3)
        case MovingObjects.Direction.right:
            return this.game.map.emptyTile(j+4, i) && this.game.map.emptyTile(j+4, i+3)
        }

        return false
    }

    cannotMove(direction) {
        return !this.canMove(direction)
    }

    canMoveUp() {
        return this.canMove(MovingObjects.Direction.up)
    }

    canMoveDown() {
        return this.canMove(MovingObjects.Direction.down)
    }

    canMoveLeft() {
        return this.canMove(MovingObjects.Direction.left)
    }

    canMoveRight() {
        return this.canMove(MovingObjects.Direction.right)
    }

    emptyTile(x, y){
        let i = this.game.map.getRow(x)
        let j = this.game.map.getCol(y)
        return this.game.map.emptyTile(i, j)
    }
}
