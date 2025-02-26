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

export function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export function throttle(func, delay) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        console.log(`${now} - ${lastTime}`)
        console.log(`${now - lastTime} >= 100`)
        if (now - lastTime >= delay) {
            console.log("sending signal to create bomb")
            func.apply(this, args);
            lastTime = now;
            console.log("hi!")
        } else {
            // console.log("throttled input")
        }
    }
}
