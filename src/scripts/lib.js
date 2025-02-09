export class SpriteSheetConfig {
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage#parameters
    constructor(sx = 0, sy = 0, sWidth = 0, sHeight = 0) {
        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
    }

    toArgs() {
        return [this.sx, this.sy, this.sWidth, this.sHeight];
    }
}
