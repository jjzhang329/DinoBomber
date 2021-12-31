class Dino{
    constructor(ctx){
        this.x = 0;
        this.y = 460;
        this.width = 32;
        this.height = 32;
        this.move = 1
        this.draw(ctx)

    }

    draw(ctx){
        // ctx.fillStyle = 'green';
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        const dinoSprite = new Image();
        dinoSprite.src = "../assets/DinoSheet.png";
        ctx.drawImage(dinoSprite, 0, 0, this.width, 
            this.height, 0, 460, this.width, this.height)
    }

   move(){
       //if up key is pressed
       if(keys[38]){
           this.y -= this.move;
       }
   }

}



module.exports= Dino;