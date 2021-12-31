class Dino{
    constructor(ctx){
        this.x = 0;
        this.y = 460;
        this.width = 40;
        this.height = 40;
        this.move = 1
        this.draw(ctx)

    }

    draw(ctx){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height)
        const dinoSprite = new Image();
        // dinoSprite.src = 
    }

   move(){
       //if up key is pressed
       if(keys[38]){
           this.y -= this.move;
       }
   }

}



module.exports= Dino;