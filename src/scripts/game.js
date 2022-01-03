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
        this.key = new KeyHandler(this.dino).keys;
        console.log(this.map.obstacles())
        // console.log(this.map.emptyTile(45, 25))
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
            // console.log(this.dino.x)
            // console.log(this.dino.y)
            this.map.draw(this.ctx)
            this.dino.draw(this.ctx)
            // if(!this.collisionDetection()){
                
                this.dino.move(this.key)
            // };
            this.handlePlayerFrame()
            
        };   
        
    }
    handlePlayerFrame() {
        if (this.dino.frameX < 1 && this.dino.moving) {
            this.dino.frameX++
        } else { this.dino.frameX = 0 }
    }
    
    collisionDetection(){
        
        let dinoX = this.dino.x;
        let dinoY = this.dino.y;
        // console.log(dinoX)=>430
        // console.log(dinoY)=>160
        //rows object
        let tileX = this.map.getXY()[0];
        //cols object
        let tileY = this.map.getXY()[1];
       let collide = false;
       if (tileX[dinoY-4]){
           let posArr = tileX[dinoY - 4]
         
           if (posArr.includes(dinoX+60)|| posArr.includes(dinoX))
               
           {
               collide = true;
           }
       }
        // console.log(tileX[464])
    //    if(dinoX > tileY[dinoY + 44])
       
        return collide;
      
    }

    
    

}