export default class Dino {

    constructor(){
    this.x = 600
    this.y = 416
    this.width= 32
    this.height= 32
    this.frameX= 0
    this.frameY= 0
    this.speed= 10
    this.moving= false
  
    }
 

    draw(ctx){
        const dinoSprite = new Image();
        //  ctx.clearRect(0, 0, 800, 480)
        dinoSprite.addEventListener('load', () =>        
            ctx.drawImage(dinoSprite, 
            this.width * this.frameX, this.height * this.frameY, 
            this.width, this.height,
            this.x, this.y, this.width * 2, this.height * 2))
        dinoSprite.src = "src/assets/DinoSheet.png"
    }

    move(key){
        if (key['ArrowUp'] && this.y > 5) {    
            this.y -= this.speed;
            this.frameY = 3;
        }
        if (key['ArrowLeft'] && this.x > 0) {
            this.x -= this.speed;
            this.frameY = 0;
        }
        if (key['ArrowRight'] && this.x < canvas.width - this.width * 2) {
            this.x += this.speed;
            this.frameY = 2;

        }
        if (key['ArrowDown'] && this.y < canvas.height - this.height * 2) {
            this.y += this.speed
            this.frameY = 1;
        }
    }
}

