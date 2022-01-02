import Map from './map';
import Dino from './dino';
import KeyHandler from './keyHandler';
let fps, fpsInterval, startTime, now, then, elapsed;
export default class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.end = false;
        this.map = new Map();
        this.dino = new Dino();
        this.KeyHandler = new KeyHandler(this.dino);
        
        this.startAnimating(8);
    }
    
    start(){

    }
    startAnimating(fps) {
        fpsInterval = 1000 / fps;    
        then = Date.now();
        startTime = then;
        this.animate();
    }

    animate(){
        
        requestAnimationFrame(this.animate.bind(this))   
        // this.ctx.clearRect(0, 0, 800, 480)
        now = Date.now();
       elapsed = now - then;    
        if (elapsed > fpsInterval) {    
            then = now - (elapsed % fpsInterval);
            let key = this.KeyHandler.keys
            
            this.map.draw(this.ctx)
            this.dino.draw(this.ctx)
            this.dino.move(key);
            this.handlePlayerFrame()
            
        };
       
        
    }
    handlePlayerFrame() {
        if (this.dino.frameX < 1 && this.dino.moving) {
            this.dino.frameX++
        } else { this.dino.frameX = 0 }
    }
    
    collisionDetection(){
        
    }

    
    

}