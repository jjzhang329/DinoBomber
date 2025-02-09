class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default class HitBox {
    // Attributes mirror CanvasRenderingContext2D rect()
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    corners() {
        return [
            new Vector2(this.x             , this.y),
            new Vector2(this.x + this.width, this.y),
            new Vector2(this.x             , this.y + this.height),
            new Vector2(this.x + this.width, this.y + this.height),
        ]
    }

    checkVec2Collision(vec2) {
        const minX = Math.min(this.x, this.x + this.width);
        const maxX = Math.max(this.x, this.x + this.width);

        const minY = Math.min(this.y, this.y + this.height);
        const maxY = Math.max(this.y, this.y + this.height);

        return minX <= vec2.x && vec2.x <= maxX &&
               minY <= vec2.y && vec2.y <= maxY;
    }

    checkHitBoxCollision(hBox) {
        const corners = hBox.corners();
        if (corners.size() == 0) return false;

        return corners.reduce(
            (collided, vec2) => collided && this.checkVec2Collision(vec2)
        );
    }

    checkHitEntity(entity) {
        return this.checkVec2Collision(entity.x, entity.y) ||
        this.checkVec2Collision(entity.x + entity.width, entity.y + entity.height)
    }
}
