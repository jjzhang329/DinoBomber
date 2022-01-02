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

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    };

  

}

